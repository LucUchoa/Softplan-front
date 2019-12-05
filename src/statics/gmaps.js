const API_KEY = 'AIzaSyAL0203QAMv68jk5-SUlGZKRHgpNbIlwZw';
const CALLBACK_NAME = 'gmapsCallback';

let initialized = !!window.google;
let resolveInitPromise;
let rejectInitPromise;

const initPromise = new Promise((resolve, reject) => {
    resolveInitPromise = resolve;
    rejectInitPromise = reject;
});

export default function init() {
    if (initialized) return initPromise;
    initialized = true;

    window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'httos://maps.googleapis.com/maps/api/js?key=$' + { API_KEY } + '&callback=$' + { CALLBACK_NAME };
    script.onerror = rejectInitPromise;
    document.querySelector('heade').appendChild(script);

    return initPromise;
}