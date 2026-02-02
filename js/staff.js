const arch = {
    "id": "archaeologist",
    "fullName": "Dr. Leona Marrowfield",
    "image": "../images/archaeologist.png",
    "primaryRole": "Archaeologist",
    "professionalBio": "Dr. Leona Marrowfield earned her PhD in Archaeology from the University of Edinburgh, where she trained under specialists in material culture and experimental archaeology. She is known for her meticulous excavation style and her ability to reconstruct daily life from fragmentary objects. Leona specializes in pottery typologies, stone tool wear patterns, and household structures from transitional societies. She regularly uses LIDAR mapping, photogrammetry, and 3D artifact scanning to document sites before and after excavation. In the field, she balances careful precision with intuitive leaps that often lead to unexpected discoveries. Colleagues describe her as quietly bold, deeply curious, and intensely focused when working with artifacts.",
    "specialization": "Material Culture Archaeologist with a focus on domestic tools, ceramics, and everyday architecture",
    "museumRole": "Lead researcher for the museum’s Material Lives Collection, overseeing artifact analysis, storage protocols, and a rotating exhibit on everyday tools of ancient communities.",
    "discovery": "A cracked cooking pot that revealed migration patterns through clay sourcing",
    "view": "Truth is layered, like soil—never singular, always contextual"
};

const anth = {
    "id": "anthropologist",
    "fullName": "Mateo Quillan Reyes",
    "image": "../images/anthropologist.png",
    "primaryRole": "Physical Anthropologist",
    "specialization": "Human Osteology and Burial Context Analysis",
    "professionalBio": "Mateo Quillan Reyes holds a Master’s degree in Biological Anthropology from the University of New Mexico and completed advanced osteology training in Mexico City. His work centers on human remains, burial practices, and the biological traces left by ritual and daily life. Mateo is highly skilled in skeletal reconstruction, trauma analysis, and isotopic sampling to trace diet and migration. He uses digital calipers, portable CT scanners, and detailed field journals to document remains with care and respect. Thoughtful and empathetic, he approaches human traces as stories rather than specimens. His calm presence makes him a trusted mentor on sensitive excavations.",
    "museumRole": "Supervisor of the Human Remains Archive, advising on ethical display, research access, and cultural consultation.",
    "discovery": "A burial showing healed injuries that rewrote assumptions about care in ancient societies",
    "view": "Human remains demand humility more than certainty"
};

const interp = {
    "id": "interpreter",
    "fullName": "Aurelia Finch-Vo",
    "image": "../images/interpreter.png",
    "primaryRole": "Cultural Interpreter",
    "specialization": "Public Engagement and Educational Programming",
    "professionalBio": "Aurelia Finch-Vo graduated with a degree in Museum Studies from the University of Toronto and has extensive experience in public history and cultural interpretation. She excels at translating complex archaeological findings into engaging narratives for diverse audiences. Aurelia is skilled in exhibit design, educational outreach, and community collaboration. She employs storytelling techniques, interactive displays, and multimedia presentations to bring the past to life. Known for her enthusiasm and creativity, Aurelia connects with visitors of all ages, making history accessible and exciting.",
    "museumRole": "Head of Public Programs, responsible for developing educational initiatives, guided tours, and community events that highlight the museum's collections.",
    "discovery": "An interactive exhibit concept that increased visitor engagement by 40%",
    "view": "History is a conversation, not a monologue"
};

const staffMembers = [arch, anth, interp];

// This is for the staff section
const staffDiv = document.getElementById('staff');
if (staffDiv !== null) {
    for (let i = 0; i < staffMembers.length; i++) {
        const member = staffMembers[i];
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('staff-member');
        memberDiv.onclick = function () {
            location.href=`./${member.id}.html`;
        };

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.fullName;
        memberDiv.appendChild(img);

        const div = document.createElement('div');
        div.classList.add('staff-info');
        memberDiv.appendChild(div);

        const name = document.createElement('h3');
        name.textContent = member.fullName;
        div.appendChild(name);

        // Role with special styling
        const role = document.createElement('div');
        role.classList.add('staff-role');

        const roleTag = document.createElement('strong');
        roleTag.textContent = 'Role:';
        roleTag.style = 'margin-right: 10px;';
        role.appendChild(roleTag);

        const roleText = document.createElement('span');
        roleText.textContent = member.primaryRole;
        role.appendChild(roleText);
        div.appendChild(role);

        const specialization = document.createElement('p');
        specialization.textContent = member.specialization;
        specialization.style = 'font-style: italic; margin-top: 10px;';
        div.appendChild(specialization);

        staffDiv.appendChild(memberDiv);
    }
}

// This is for anthropologist.html, archaeologist.html, interpreter.html pages
const anthropologiestDiv = document.getElementById('anthropologiest');
const archaeologistDiv = document.getElementById('archaeologist');
const interpreterDiv = document.getElementById('interpreter');

let divToUse = null;
let individualDataToUse = null;
if (anthropologiestDiv !== null) {
    divToUse = anthropologiestDiv;
    individualDataToUse = anth;
} else if (archaeologistDiv !== null) {
    divToUse = archaeologistDiv;
    individualDataToUse = arch;
} else if (interpreterDiv !== null) {
    divToUse = interpreterDiv;
    individualDataToUse = interp;
}

if (divToUse !== null) {
    const member = individualDataToUse;
    const memberDiv = divToUse;

    divToUse.classList.add('staff-member');
    
    const img = document.createElement('img');
    img.src = member.image;
    img.alt = member.fullName;
    memberDiv.appendChild(img);

    const div = document.createElement('div');
    div.classList.add('staff-info');
    memberDiv.appendChild(div);

    const name = document.createElement('h3');
    name.textContent = member.fullName;
    div.appendChild(name);

    // Role with special styling
    const role = document.createElement('div');
    role.classList.add('staff-role');

    const roleTag = document.createElement('strong');
    roleTag.textContent = 'Subject Matter Expertise:';
    roleTag.style = 'margin-right: 10px;';
    role.appendChild(roleTag);

    const roleText = document.createElement('span');
    roleText.textContent = member.primaryRole;
    role.appendChild(roleText);
    div.appendChild(role);

    // Bio
    const bio = document.createElement('div');
    bio.classList.add('staff-block');

    const bioHeader = document.createElement('h4');
    bioHeader.textContent = 'Professional Bio:';
    bio.appendChild(bioHeader);

    const bioText = document.createElement('p');
    bioText.textContent = member.professionalBio;
    bio.appendChild(bioText);
    div.appendChild(bio);

    // Museum Role
    const museumRole = document.createElement('div');
    museumRole.classList.add('staff-block');

    const museumRoleHeader = document.createElement('h4');
    museumRoleHeader.textContent = 'Museum Role:';
    museumRole.appendChild(museumRoleHeader);

    const museumRoleText = document.createElement('p');
    museumRoleText.textContent = member.museumRole;
    museumRole.appendChild(museumRoleText);
    div.appendChild(museumRole);

    // Relic Discovery
    const discovery = document.createElement('div');
    discovery.classList.add('staff-block');

    const discoveryHeader = document.createElement('h4');
    discoveryHeader.textContent = 'Relic that Changed One\'s life:';
    discovery.appendChild(discoveryHeader);

    const discoveryText = document.createElement('p');
    discoveryText.textContent = member.discovery;
    discovery.appendChild(discoveryText);
    div.appendChild(discovery);

    
    // View on History
    const viewBlock = document.createElement('div');
    viewBlock.classList.add('staff-block');

    const viewHeader = document.createElement('h4');
    viewHeader.textContent = 'Personal View on History:';
    viewBlock.appendChild(viewHeader);

    const viewText = document.createElement('p');
    viewText.textContent = member.view;
    viewBlock.appendChild(viewText);
    div.appendChild(viewBlock);
}
