const notes = [8,9,7,5,10,6]

notes.sort((a, b) => a - b)
notes.pop()
notes.shift()

console.log((notes[0]+notes[1]+notes[2]+notes[3])/notes.length)