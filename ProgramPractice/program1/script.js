const bike = {
    color: 'Green and black',
    miles: 12000,
    year: 2022,
    make: 'Kawasaki',
    model: 'Ninja 400'

}
const chad = {
    name: 'Chad',
    age: 32,
    occupation: 'Web Designer/Developer',
    location: 'Florida',
    experience: `Ive been doing many courses online for Web Designing and Development for a little over a year
    now. I began school beginning of last year to earn my college certificate
    so I be well profient in as many areas of Web Development as possible. I continue to grow my skills
    and learn new things as often as I can. Ive have learned alot involving Git and Github, and the
    command line commands to push, pull, add, edit and so on. `
}
function getBikeSpecs() {
    const bikeSpecs = `
        <h2>Bike Specifications</h2>
        <p><strong>Color:</strong> ${bike.color}</p>
        <p><strong>Miles:</strong> ${bike.miles}</p>
        <p><strong>Year:</strong> ${bike.year}</p>
        <p><strong>Make:</strong> ${bike.make}</p>
        <p><strong>Model:</strong> ${bike.model}</p>
    `;
    document.querySelector('.container').innerHTML = bikeSpecs;

}
const getMyInfo = () => {
    const myInfo = `
        <h1>Chad Blincoe</h1>
        <p><strong>Age:</strong> ${chad.age}</p>
        <p><strong>Occupation:</strong> ${chad.occupation}</p>
        <p><strong>Location:</strong> ${chad.location}</p>
        <p><strong>Experience:</strong> ${chad.experience}</p>
        
    `;

        document.querySelector('.about-me-container').innerHTML = myInfo;

}