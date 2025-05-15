function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase to perform a case-insensitive search
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence
    return lowerStr.indexOf(lowerSubStr);
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1
console.log(indexOfIgnoreCase("JavaScript", ""));       // Output: 0
console.log(indexOfIgnoreCase("", "test"));             // Output: -1

