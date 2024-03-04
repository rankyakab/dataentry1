function generateCombinations(arrays, currentCombo, index, result) {
  if (index === arrays.length) {
    result.push([...currentCombo]);
    return;
  }

  for (let i = 0; i < arrays[index].length; i++) {
    currentCombo.push(arrays[index][i]);
    generateCombinations(arrays, currentCombo, index + 1, result);
    currentCombo.pop();
  }
}

export function getAllCombinations(arrays) {
  const result = [];
  generateCombinations(arrays, [], 0, result);
  return result;
}

export function formatDateAndTime(date) {
  const dateObject = new Date(date);

  // Format the date and time
  const formattedDate = dateObject.toLocaleDateString();
  const formattedTime = dateObject.toLocaleTimeString();
  return formattedDate + " - " + formattedTime;
}
