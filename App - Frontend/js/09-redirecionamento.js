window.onload = function() {

    fetch('http://ec2-54-165-208-25.compute-1.amazonaws.com:8080/api/v1/transacao', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            partnerId: 1,
            clientRfid: 'CD0012RFBS',
            amount: localStorage.getItem('valor-recarga')
        })
    }).then((response) => {

        setTimeout(() => {
            document.location.href = './10-sucesso.html';
        }, 2500);

    }).catch(error => {
        console.error(error);
    });

};