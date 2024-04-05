
(async function() {

    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();


    const users = data.results;
    const userDataDiv = document.getElementById('user-data');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = user.picture.large;
        const pName = document.createElement('p');
        pName.textContent = `Nombre: ${user.name.first} ${user.name.last}`;
        const pEmail = document.createElement('p');
        pEmail.textContent = `Email: ${user.email}`;
        const pPhone = document.createElement('p');
        pPhone.textContent = `Teléfono: ${user.phone}`;
        userDiv.append(img, pName, pEmail, pPhone);
        userDataDiv.appendChild(userDiv);
    });
})();
