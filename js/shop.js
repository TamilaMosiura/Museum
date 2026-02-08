const items = [
    {
        name: "Copy of fossilized dinosaur bone",
        imageName: "bone",
        price: "$150",
        description: "A high-quality copy of a fossilized dinosaur bone, perfect for collectors and enthusiasts of paleontology. This replica is made from durable materials and is a great addition to any natural history collection."
    },
    {
        name: "Tooth of a mammoth",
        imageName: "tooth",
        price: "$500",
        description: "A rare and fascinating artifact, this tooth of a mammoth is a unique piece of history. Mammoths were majestic creatures that roamed the Earth during the Ice Age, and their remains provide valuable insights into prehistoric life. This tooth is a remarkable specimen for collectors and enthusiasts of paleontology."
    },
    {
        name: "Replica of a prehistoric cave painting",
        imageName: "painting",
        price: "$200",
        description: "This replica of a prehistoric cave painting captures the essence of ancient art and culture. The original cave paintings were created by early humans and depict scenes of hunting, animals, and daily life. This replica is a beautiful representation of our ancestors' creativity and serves as a reminder of our shared human history."
    },
    {
        name: "Ancient pottery shard",
        imageName: "pottery",
        price: "$75",
        description: "This ancient pottery shard is a fragment of a vessel that dates back to a bygone era. Pottery shards like this one provide valuable insights into the daily lives and cultures of ancient civilizations. This shard is a tangible connection to the past and a fascinating piece for collectors and history enthusiasts."
    },
    {
        name: "Replica of a medieval knight's helmet",
        imageName: "helmet",
        price: "$300",
        description: "This replica of a medieval knight's helmet is a stunning piece of craftsmanship that pays homage to the chivalry and valor of the Middle Ages. The original helmets were worn by knights in battle and tournaments, serving both as protection and as a symbol of status. This replica is a great addition to any collection of medieval artifacts or for those interested in the history of warfare."
    }
]

const shopDiv = document.getElementById("shop-items");

items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("shop-cart");

    itemDiv.innerHTML = `
        <img src="../images/shop/${item.imageName}.png" alt="${item.name}">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <p>${item.description}</p>

        <button class="buy-button">Add to Cart</button>
    `;

    document.getElementById("shop-items").appendChild(itemDiv);
});
