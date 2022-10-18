console.log('V2');

window.addEventListener('LIVESUPP_LOADED', async event => {
    const lsAPI = event.detail.api
    lsAPI.useSignPost()
 })