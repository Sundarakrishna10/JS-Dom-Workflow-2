const data = [
    {
        name: 'Rahul',
        empId: 4389,
        Address: {
            CityName: 'Vijawada',
            District: 'Krishna',
            Pin: 528754,
        },
        Hobbies: ['Netflix', 'Tennis', 'Coding']
    },
    {
        name: 'Ravi',
        empId: 9896,
        Address: {
            CityName: 'Gundur',
            District: 'Prakasham',
            Pin: 688754,
        },
        Hobbies: ['Reading', 'Gym', 'Baking']
    },
    {
        name: 'Santhosh',
        empId: 8876,
        Address: {
            CityName: 'Warangal',
            District: 'Hanumankondan',
            Pin: 356754,
        },
        Hobbies: ['Gym', 'Reading', 'Novels']
    },
    {
        name: 'Surya',
        empId: 3469,
        Address: {
            CityName: 'Namakkal',
            District: 'Namakkal',
            Pin: 517950,
        },
        Hobbies: ['Jogging', 'Tennis', 'Netflix']
    },
    {
        name: 'Kiran',
        empId: 8864,
        Address: {
            CityName: 'Krishnagiri',
            District: 'Krishnagiri',
            Pin: 6487921,
        },
        Hobbies: ['Gaming', 'Cooking', 'Movie']
    }
];

//craete container

const container = document.createElement("div")
container.id = "container"
document.body.appendChild(container)
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.border = "2px solid red"
container.style.padding = "2px"
container.style.justifyContent = "space-around"

data.map(employee=>{
    //create card.....
    const card = document.createElement("div")
    card.id = "card";
    container.appendChild(card)
    card.style.border = "2px solid blue"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.width = "230px"
    card.style.margin = "5px"
    card.style.padding = "5px"
    card.style.flexWrap="wrap"
    
    //add name

    const name = document.createElement("h3")
    name.innerHTML = `Name:${employee.name}`
    card.appendChild(name)

    //add employee id
    const employee_id=document.createElement("h4")
    employee_id.innerHTML=`Employee Id :${employee.empId}`
    employee_id.style.marginTop="5px"
    card.appendChild(employee_id)

    //address card...

    const address_card = document.createElement("div")
    address_card.id = "address_card";
    card.appendChild(address_card)
    address_card.style.border = "2px solid green"
    address_card.style.padding = "5px"
    address_card.style.display="flex"
    address_card.style.flexDirection="column"
    

    //add address title
    const addressTitle = document.createElement('h3')
    addressTitle.innerHTML= 'Address:'
    address_card.appendChild(addressTitle)

    //add city name
        const cityName = document.createElement("p")
        cityName.innerHTML= `<b>CityName:</b> ${employee.Address.CityName}`
        address_card.appendChild(cityName)

        //add district name
        const district = document.createElement("p")
        district.innerHTML= `<b>District:</b> ${employee.Address.District}`
        address_card.appendChild(district)

        //add pin number
        const pinNumber = document.createElement("p")
        pinNumber.innerHTML= `<b>Pin:</b> ${employee.Address.Pin}`
        address_card.appendChild(pinNumber)

        //add hobbies array

        
        const list_hobbies=document.createElement("p")

        let text=""
        // for(let listOfHobbies of employee.Hobbies){
        //    text += listOfHobbies + ",";//text=text+listOfHobbies+","
        
        //  }
        for(let i=0;i<employee.Hobbies.length;i++){
            
           text +=employee.Hobbies[i] + "  ";//text=text+listOfHobbies+","
        }
        list_hobbies.innerHTML=`<b>Hobbies:</b>${text}`

       card.appendChild(list_hobbies)


})