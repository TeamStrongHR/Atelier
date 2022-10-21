const featureA = [
  {
      "feature": "Sole",
      "value": "Rubber"
  },
  {
      "feature": "Material",
      "value": "FullControlSkin"
  },
  {
      "feature": "Stitching",
      "value": "Double Stitch"
  }
];

const featureB = [
  {
      "feature": "Sole",
      "value": "Rubber"
  },
  {
      "feature": "Material",
      "value": "FullControlSkin"
  },
  {
      "feature": "Mid-Sole",
      "value": "ControlSupport Arch Bridge"
  },
  {
      "feature": "Stitching",
      "value": "Double Stitch"
  },
  {
    "feature": "Added",
    "value": "Double Stitch"
  }
];

//should return an object containing all features as key, both values in an array

function prep(arr1, arr2) {
  let comparison = {};
  arr1.forEach((feature) => {
    comparison[feature.feature] = [feature.value];
  })

  arr2.forEach((feature) => {
    if (comparison.hasOwnProperty(feature.feature)) {
      comparison[feature.feature].push(feature.value);
    } else {
      comparison[feature.feature] = ['', feature.value];
    }
  })

  return comparison;
}

// console.log(JSON.stringify(prep(featureA, featureB)));