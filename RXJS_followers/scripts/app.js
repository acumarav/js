/**
 * Created by tsumaraa on 10/06/2016.
 */

function init() {
    var refreshButton = document.querySelector('.refresh');
    var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

    var requestUrl = 'https://api.github.com/users';
    /*var requestStream=Rx.Observable.just(requestUrl);*/
    var requestStream = refreshClickStream.map(function () {
        var rndOffset = Math.floor(Math.random() * 500);
        return 'https://api.github.com/users?since=' + rndOffset;
    });

    var responseStream = requestStream.flatMap(function (requestUrl) {
        return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
    });

    responseStream.subscribe(function (response) {
        console.log("echo " + response);
    });

}

