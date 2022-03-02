// RNA Transcription:

// Given a DNA strand, write a function to return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

//             DNA	RNA
//              G	  C
//              C	  G
//              T     A
//              A	  U

// rnaTranscription("GCTAGCT")
// > "CGAUCGA"


function rnaTranscription(dna) {
    const nucleotides = dna.split("");
    let rna = "";
    for (let i = 0; i < nucleotides.length; i++) {
      if (nucleotides[i] === "G") {
        rna += "C";
      } else if (nucleotides[i] === "C") {
        rna += "G";
      } else if (nucleotides[i] === "T") {
        rna += "A";
      } else if (nucleotides[i] === "A") {
        rna += "U";
      } else {
        return ""
      }
    }
    return rna;
  };
console.log(rnaTranscription("GCTAGCT"))


