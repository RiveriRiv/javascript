// ==== Module#1 Basics ====
mocha.setup('bdd');
const expect = chai.expect;

// ==== Change the capitalization of all letters in a string ====
const changeCase = (param) => {
  let result = "";
  
  for (let value of param) {
    /[A-Z]/.test(value) ? result+=value.toLowerCase() : result+=value.toUpperCase();
  }
  
  return result;
};

describe('changeCase', () => {
  it('should change the capitalization of all letters in a given string', () => {
    expect(changeCase('21century')).to.equal('21CENTURY');
    expect(changeCase('Hybris')).to.equal('hYBRIS');
  });  
});

// ==== Filter out the non-unique values in an array ====
const filterNonUnique = (param) => {
  param.sort();
  let valuesToRemove = [];
  for (let i = 0; i < param.length; i++) {
        let k = i;
        while (param[k + 1] == param[i]) {
          valuesToRemove.push(param[k]);
          k++;       
        }
  }
  
  return param.filter(item => !valuesToRemove.includes(item));
};

describe('filterNonUnique', () => {
  it('should filter out non-unique values in an array', () => {
    expect(filterNonUnique([1, 2, 2, 3, 4, 4, 5])).to.eql([1,3,5]);
    expect(filterNonUnique([1, 2, 3, 4])).to.eql([1,2,3,4]);
  });
});

// ==== Sort string in alphabetical order ====
const alphabetSort = (param) => {
   return Array.from(param).sort().join("");
};

describe('alphabetSort', () => {
  it('should accept a string type only', () => {
    expect(() => alphabetSort()).to.throw();
    expect(() => alphabetSort('Text')).not.to.throw();
  });

  it('should convert the letters of a given string in alphabetical order', () => {
    expect(alphabetSort('Python')).to.equal('Phnoty');
  });
});

// ==== Get min integer ====
const getSecondMinimum = (param) => {
   return param.sort()[1];
};

describe('getSecondMinimum', () => {
  it('should get array of integers and return second minimum value', () => {
    expect(getSecondMinimum([5,0,7,3,8])).to.equal(3);
  });
});

// ==== Double every even integer ====
const doubleEveryEven = (param) => {
  for (let i = 0; i < param.length; i++) {
    if (param[i] && !(param[i] % 2)) {
      param[i]+=param[i];
    }
  }
  return param;
};

describe('doubleEveryEven', () => {
  it('should get array of integers and return another array of integers where every even number is doubled', () => {
    expect(doubleEveryEven([2,0,7,3,8,4])).to.eql([4,0,7,3,16,8]);
  });
});

// ==== Create array with all possible pairs of two arrays ====
const getArrayElementsPairs = (firstParam, secondParam) => {
  let arrays = [];
 
  for (let i = 0; i < firstParam.length; i++) {
    for (let k = 0; k < secondParam.length; k++) {
      arrays.push([firstParam[i], secondParam[k]]);
    }
  }
  
  return arrays;
};

describe('getArrayElementsPairs', () => {
  it('should get two arrays and return array containing each possible pair from the arrays', () => {
    expect(getArrayElementsPairs([1,2], ['a', 'b'])).to.eql([[1, "a"], [1, "b"], [2, "a"], [2, "b"]]);
  });
});

// ==== Deep equal ====
const deepEqual = (firstObject, secondObject) => {
  
  if (firstObject.length != secondObject.length) {
    return false;
  }
  
  for (let [key, value] of Object.entries(firstObject)) {
    
    if (typeof value === 'object') {
      if (!deepEqual(value, secondObject[key])) {
        return false;
      }
    } else if (value != secondObject[key]) {
      return false;
    }
  }
  
  return true;
};

describe('deepEqual', () => {
  let obj = {here: {is: "an"}, object: 2};
  it('should get two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal', () => {
    expect(deepEqual(obj, obj)).to.eql(true);    
    expect(deepEqual(obj, {here: 1, object: 2})).to.eql(false);
    expect(deepEqual(obj,  {here: {is: "an"}, object: 2})).to.eql(true);
  });
});

// ==== Format date ====
function getDoubleDigitNumber(param) {
  return param < 10 ? '0' + param : param;
}

const formatDate = (param) => {
  
  if (Array.isArray(param)) {
    param[1] += 1;
    param = param.join('-').toString();
  }
    
  var date = new Date(param);
  date.setMonth(date.getMonth() + 1);
  
  return getDoubleDigitNumber(date.getDate()) + '.' + getDoubleDigitNumber(date.getMonth()) + '.' + date.getFullYear().toString().substring(2);
};

describe('formatDate', () => {
  it('should take parameter of different types and returns date in ‘dd.mm.yy’ format', () => {
    expect(formatDate('2011-10-02')).to.eql('02.10.11');    
    expect(formatDate(1234567890000)).to.eql('14.02.09');
    expect(formatDate([2014, 0, 1])).to.eql('01.01.14');
    expect(formatDate(new Date(2014, 0, 1))).to.eql('01.01.14');
  });
});

mocha.run();