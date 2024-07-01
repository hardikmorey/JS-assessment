// Define a function to create a new NFT with given metadata
function createNFT(title, artist, year) {
    // Return an object representing the NFT
    return {
        title: title,
        artist: artist,
        year: year
    };
}

// Define a function to add an NFT to the collection
function addToCollection(nft, collection) {
    collection.push(nft);
}

// Define a function to print the metadata of NFTs in the collection
function printCollection(collection) {
    console.log("Listing NFTs:");
    console.log("---------------------");
    collection.forEach(nft => {
        console.log("Name: " + nft.title);
        console.log("Artist: " + nft.artist);
        console.log("Year: " + nft.year);
        console.log("---------------------");
    });
}

// Define a function to get the total number of NFTs in the collection
function getTotal(collection) {
    return collection.length;
}

// Create an empty array to hold the NFTs
let myNFTs = [];

// Create NFTs and add them to the collection
addToCollection(createNFT("Zero twelve", "Sourav", 2024), myNFTs);
addToCollection(createNFT("Law to Flaw", "Amit", 2022), myNFTs);
addToCollection(createNFT("Black Pink", "Karan", 2021), myNFTs);
addToCollection(createNFT("Dream Visions", "Umar", 2019), myNFTs); // New NFT

// Print the NFTs in the collection
printCollection(myNFTs);

// Print the total number of NFTs
console.log("Total NFTs: " + getTotal(myNFTs));
