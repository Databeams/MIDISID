const io = require('socket.io-client');
const {spawn} = require('child_process');
// 1:st rpi = http://192.168.1.187:3000
// 2:nd rpi = http://192.168.1.122:3000
// 3:rd rpi = http://192.168.1.71:3000
// 4:th rpi = http://192.168.1.68:3000
// 5:th rpi = http://192.168.1.69:3000


const socketForRPi1 = io('http://192.168.1.186:3000');
const socketForRPI2 = io('http://192.168.1.121:3000');
const socketForRPI3 = io('http://192.168.1.70:3000');
const socketForRPI4 = io('http://192.168.1.68:3000');
const socketForRPI5 = io('http://192.168.1.67:3000');
const socketForRPI6 = io('http://192.168.1.185:3000');

  

socketForRPi1.once('connect', () => {
    console.log("RPI #1 connected!");  
    socketForRPi1.on('midi', data => {
	    console.log(data)
	    playNote(data.button)
    });
});

socketForRPI2.once('connect', () => {
  console.log("RPI #2 connected!");  
  socketForRPI2.on('midi', data => {
	  console.log(data)
	  playNote(data.button)
  });
});


socketForRPI3.once('connect', () => {
  console.log("RPI #3 connected!");  
  socketForRPI3.on('midi', data => {
	  console.log(data)
	  playNote(data.button)
  });
});


socketForRPI4.once('connect', () => {
  console.log("RPI #4 connected!");  
  socketForRPI4.on('midi', data => {
	  console.log(data)
	  playNote(data.button)
  });
});


socketForRPI5.once('connect', () => {
  console.log("RPI #5 connected!");  
  socketForRPI5.on('midi', data => {
	  console.log(data)
	  playNote(data.button)
  });
});

socketForRPI6.once('connect', () => {
  console.log("RPI #6 connected!");  
  socketForRPI6.on('midi', data => {
	  console.log(data)
	  playNote(data.button)
  });
});

const playNote = (note) =>
{
 // spawn new child process to call the python script
 const python = spawn('python', ['main.py', mapMidiNote(note)]);
 
// in close event we are sure that stream from child process is closed
}
const mapMidiNote = note => 
{
  switch(note)
  {
    case 60:
      return 0x59;
    case 59:
      return 0x58;
    case 58:
        return 0x57;
    case 57:
        return 0x56;
    case 56:
        return 0x55;
    case 55:
        return 0x54;
    case 54:
        return 0x53;
    case 53:
        return 0x52;
    case 52:
        return 0x51; 
    case 51:
        return 0x50;
    case 50:
        return 0x4F;
    case 49:
        return 0x4E;  
    case 48:
        return 0x4D;      
    case 47:
        return 0x3F;  
    case 46:
        return 0x40;  
    case 45:
        return 0x38; 
    case 44:
        return 0x39;  
    case 43:
        return 0x3C;  
    case 42:
        return 0x3D;  
    case 41:
        return 0x3E;  
    case 40:
        return 0x3A;  
    case 39:
        return 0x37;  
    case 38:
        return 0x36; 
    case 37:
        return 0x3B; 
    case 36:
        return 0x4D;    
    case 36:
        return 0x40;  
    case 35:
        return 0x3F;  
    case 34:
        return 0x3E;  
    case 33:
        return 0x3D;  
    case 32:
        return 0x3C;  
    case 31:
        return 0x3B;  
    case 30:
        return 0x3A;  
    case 29:
        return 0x39;  
    case 28:
        return 0x38;  
    case 27:
        return 0x37;  
    case 26:
        return 0x36;  
    case 25:
        return 0x35;    
    case 24:
        return 0x34; 
    case 23:
        return 0x35; 
    case 22:
        return 0x34; 
    case 21:
        return 0x33; 
    case 20:
        return 0x32; 
    case 19:
        return 0x31; 
    case 18:
        return 0x30; 
    case 17:
        return 0x2F; 
    case 16:
        return 0x2E; 
    case 15:
        return 0x2D; 
    case 14:
        return 0x2C;  
    case 13:
        return 0x2B; 
    case 12:
        return 0x2A;

    case 200:
        return 0x29;
    case 199:
        return 0x28;
    case 198:
        return 0x27;
    case 197:
        return 0x26;
    case 196:
        return 0x25;
    case 195:
        return 0x24;
    case 194:
        return 0x23;
    case 193:
        return 0x21;
    case 192:
        return 0x22;
    case 191:
        return 0x20;
    case 190:
        return 0x1F;
    case 189:
        return 0x1E;


        case 100:
            return 0x1D;
        case 99:
            return 0x1C;
        case 98:
            return 0x1B;
        case 97:
            return 0x1A;
        case 96:
            return 0x19;
        case 95:
            return 0x18;
        case 93:
            return 0x17;
        case 92:
            return 0x16;
        case 91:
            return 0x15;
        case 90:
            return 0x14;
        case 87:
            return 0x13;
        case 89:
            return 0x12;
        case 88:
            return 0x11;
  }
}
