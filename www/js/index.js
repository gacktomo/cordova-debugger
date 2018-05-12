var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        btn = document.getElementById('btn');
        btn.addEventListener('click', this.runApp, false);
        if(localStorage.url == null)
          localStorage.url = "http://192.168.1.1:8080";
        document.getElementById('url').value = localStorage.url;
    },

    runApp: function() {
        url = document.getElementById('url');
        localStorage.url = url.value;
        location.href = url.value;
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
