import RPi.GPIO as GPIO
import time
import sys
import string

O2 = 7
CS = 12

D0 = 23
D1 = 21
D2 = 19
D3 = 15
D4 = 13
D5 = 11
D6 = 5
D7 = 3

A0 = 10
A1 = 8
A2 = 22
A3 = 24
A4 = 26

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

GPIO.setup(O2, GPIO.OUT)
GPIO.setup(CS, GPIO.OUT)
GPIO.setup(D0, GPIO.OUT)
GPIO.setup(D1, GPIO.OUT)
GPIO.setup(D2, GPIO.OUT)
GPIO.setup(D3, GPIO.OUT)
GPIO.setup(D4, GPIO.OUT)
GPIO.setup(D5, GPIO.OUT)
GPIO.setup(D6, GPIO.OUT)
GPIO.setup(D7, GPIO.OUT)

GPIO.setup(A0, GPIO.OUT)
GPIO.setup(A1, GPIO.OUT)
GPIO.setup(A2, GPIO.OUT)
GPIO.setup(A3, GPIO.OUT)
GPIO.setup(A4, GPIO.OUT)

#pi_pwm = GPIO.PWM(O2,1000)		#create PWM instance with frequency
#pi_pwm.start(100)	


def main():
    
    #Initialize the SID by clearing all data
    PlayNote(sys.argv[1])
    return

def mapNote(note):

    return 6207
    pass

def PlayNote(note):
    
    value = mapNote(note)
    fil = open("Castlevania_64_Mixes.dmp", "rb")
    freqLow = value & 0xff
    freqHigh = (value >> 8)
    address = [0b00000000, 0b00001000, 0b00010000, 0b00011000, 0b00100000, 0b00101000, 0b00110000]
    data = [freqLow, freqHigh, 0b00000000, 0b00001001, 0b10000001, 0b00001111, 0b00010001] 
    while 1:
        for i in range(0,25):
            byte = fil.read(1)
            realByte = ord(byte[0])
            GPIO.output(CS, False)
            ShiftAddress(i)
            ShiftData(realByte)
            time.sleep(0.00001)
            GPIO.output(CS, True)

def ShiftAddress(val):
    bit1 = ((val>>7)&1==1);
    bit2 = ((val>>6)&1==1);
    bit3 = ((val>>5)&1==1);
    bit4 = ((val>>4)&1==1);
    bit5 = ((val>>3)&1==1);
    bit6 = ((val>>2)&1==1);
    bit7 = ((val>>1)&1==1);
    bit8 = (val&1==1);
    GPIO.output(A0, bit5)
    GPIO.output(A1, bit4)
    GPIO.output(A2, bit3)
    GPIO.output(A3, bit2)
    GPIO.output(A4, bit1)
    return

def ShiftData(val):
    bit1 = ((val>>7)&1==1);
    bit2 = ((val>>6)&1==1);
    bit3 = ((val>>5)&1==1);
    bit4 = ((val>>4)&1==1);
    bit5 = ((val>>3)&1==1);
    bit6 = ((val>>2)&1==1);
    bit7 = ((val>>1)&1==1);
    bit8 = (val&1==1);
    GPIO.output(D7, bit1)  
    GPIO.output(D6, bit2)  
    GPIO.output(D5, bit3)  
    GPIO.output(D4, bit4)  
    GPIO.output(D3, bit5)  
    GPIO.output(D2, bit6)  
    GPIO.output(D1, bit7)  
    GPIO.output(D0, bit8) 

    GPIO.output(O2, True)
    GPIO.output(O2, False)
    return

#Bytes from file, as obtained here: http://stackoverflow.com/a/1035456
def bytes_from_file(fileName, chunksize=8192):
    with open(fileName, "rb") as f:
        while True:
            chunk = f.read(chunksize)
            if chunk:
                for b in chunk:
                    yield b
            else:
                break

if __name__ == "__main__": main()
