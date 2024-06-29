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
addToCollection(createNFT("Digital Sunrise", "Alex Grey", 2021), myNFTs);
addToCollection(createNFT("Virtual Dreams", "Beeple", 2020), myNFTs);
addToCollection(createNFT("Blockchain Bliss", "Pak", 2022), myNFTs);
addToCollection(createNFT("Ethereal Visions", "Mad Dog Jones", 2023), myNFTs); // New NFT

// Print the NFTs in the collection
printCollection(myNFTs);

// Print the total number of NFTs
console.log("Total NFTs: " + getTotal(myNFTs));
