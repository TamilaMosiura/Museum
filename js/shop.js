const items = [
    {
        id: "item0001",
        name: "Copy of fossilized dinosaur bone",
        imageName: "bone",
        price: "$150",
        description: "A high-quality copy of a fossilized dinosaur bone, perfect for collectors and enthusiasts of paleontology. This replica is made from durable materials and is a great addition to any natural history collection."
    },
    {
        id: "item0002",
        name: "Tooth of a mammoth",
        imageName: "tooth",
        price: "$500",
        description: "A rare and fascinating artifact, this tooth of a mammoth is a unique piece of history. Mammoths were majestic creatures that roamed the Earth during the Ice Age, and their remains provide valuable insights into prehistoric life. This tooth is a remarkable specimen for collectors and enthusiasts of paleontology."
    },
    {
        id: "item0003",
        name: "Replica of a prehistoric cave painting",
        imageName: "painting",
        price: "$200",
        description: "This replica of a prehistoric cave painting captures the essence of ancient art and culture. The original cave paintings were created by early humans and depict scenes of hunting, animals, and daily life. This replica is a beautiful representation of our ancestors' creativity and serves as a reminder of our shared human history."
    },
    {
        id: "item0004",
        name: "Ancient pottery shard",
        imageName: "pottery",
        price: "$75",
        description: "This ancient pottery shard is a fragment of a vessel that dates back to a bygone era. Pottery shards like this one provide valuable insights into the daily lives and cultures of ancient civilizations. This shard is a tangible connection to the past and a fascinating piece for collectors and history enthusiasts."
    },
    {
        id: "item0005",
        name: "Replica of a medieval helmet",
        imageName: "helmet",
        price: "$300",
        description: "This replica of a medieval knight's helmet is a stunning piece of craftsmanship that pays homage to the chivalry and valor of the Middle Ages. The original helmets were worn by knights in battle and tournaments, serving both as protection and as a symbol of status. This replica is a great addition to any collection of medieval artifacts or for those interested in the history of warfare."
    }
]

const shopDiv = document.getElementById("shop-items");

items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("shop-cart");
    const imageSrc = `../images/shop/${item.imageName}.png`;

    itemDiv.innerHTML = `
        <img 
            src="${imageSrc}"
            alt="${item.name}"
            onclick="openModal({src: '${imageSrc}', alt: '${item.name}'})"
        >
        <p>${item.name}</p>
        <p><strong>Price: </strong>${item.price}</p>
        <p>${item.description}</p>

        <button class="buy-button" onclick="addToCart('${item.id}')">Add to Cart</button>
    `;

    document.getElementById("shop-items").appendChild(itemDiv);
});

function addToCart (itemId) {
    alert(`Added ${itemId} to cart (functionality to come)`);
}

function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imgElement.src;
    modalImage.alt = imgElement.alt;
    modal.classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
}

// Optional: Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
    closeModal();
    }
}
