let form = document.querySelector('#contact_form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    debugger

    const formdata = new FormData(this)
    let name = formdata.get('name')
    let email = formdata.get('email')
    let subject = formdata.get('subject')
    let message = formdata.get('message')

    Email.send({
        SecureToken:'fc342b94-90e3-4d44-b2d3-62c72460fecd',
        To : 'rohankumawat.pinkcity@gmail.com',
        From : `${email}`,
        Subject : `${subject}`,
        Body : `Message by ${name} \n ${message}`
    }).then(
      msg => alert(msg)
    );
})