interface MajorCredits {
  Credits: number;
  __brand: 'MajorCredits';

}
interface MinorCredits {
  Credits: number;
  __brand: 'MinorCredits';

}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      Credits: subject1.Credits + subject2.Credits,
      __brand: 'MajorCredits',
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      Credits: subject1.Credits + subject2.Credits,
      __brand: 'MinorCredits',
    };
  }