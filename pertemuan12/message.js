const message = () => {
    const header = "<div style='text-align:center;'><h1>Personal Information"
    const name = "Julio Joseph Victor Masengi";
    const age = 33;
    const status = "single";
    const major = "Information Systems";
    const faculty = "Computer Science";
    const address = "Jln. Diponegoro No.53. Manado";
    const interest = "Programming, Machine Learning, AI";

    return header + '<hr> <strong> Name : </strong>' + name + '<br> <strong>Age : </strong>' + age + ' <br> <strong> Status : </strong>' + status + '<br> <strong> Major : </strong>' + major + '<br> <strong> Faculty : </strong>' + faculty + '<br> <strong> Address : </strong>' + address + '<br> <strong> Interest : </strong>' + interest;
    
};

export default message;