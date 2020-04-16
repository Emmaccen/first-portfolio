
var db = firebase.firestore();
const notification = document.querySelector('.contactPopupContainer')
const notificationMessage = document.querySelector('.contactPopupMessage')

function handleNotification (message){
    notification.style.height = '60px'
        notificationMessage.innerHTML = message
        setTimeout(() => {
            notificationMessage.innerHTML = ""
            notification.style.height = '0px'
        }, 3000);
}

function sendMessage(name, email, subject, message) {
    event.preventDefault()
    name = document.getElementById('formName').value
    email = document.getElementById('formEmail').value
    subject = document.getElementById('formSubject').value
    message = document.getElementById('formMessage').value

    if(name === '' || email === '' || subject === '' || message === ''){
        handleNotification('Please Fill All Inputs !')
    }else {
            // handleNotification('Sending Message...')
        db.collection('clients').doc(new Date().toString()).set({
            customer : name,
            mail : email,
            messageSubject : subject,
            messageText : message,
            serverTimestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(){
            handleNotification('Message Sent Successfuly !');
        })
        .catch(e => handleNotification("Something Went Wrong ! " + e))
        
        document.getElementById('formName').value = ''
        document.getElementById('formEmail').value = ''
        document.getElementById('formSubject').value = ''
        document.getElementById('formMessage').value = ''

    }
  
}