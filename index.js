// console.log('V5');

// window.addEventListener('LIVESUPP_LOADED', async event => {
//     const lsAPI = event.detail.api
//     let fields = [
//         {
//             type: 'name',
//             label: 'Your name',
//         },
//         {
//             type: 'either',
//             fields: [
//                 {
//                     type: 'phoneNumber',
//                     label: 'Phone number',
//                 },
//                 {
//                     type: 'email',
//                     label: 'Email',
//                 },
//             ],
//         }                
//     ];        let choices = [
//         {
//             label: 'Praha',
//             pageId: 115,
//         },
//         {
//             label: 'Brno',
//             pageId: 116,
//         },
//         // {
//         //     label: 'Ostrava',
//         //     pageId: 697060,
//         // }
//     ];        let steps = [
//         {
//             fields: fields,
//             nextStepButtonText: "Continue",
//             title: "Let's get to know you a bit...",
//             type: "contact"
//         },
//         {
//             choices: choices,
//             nextStepButtonText: "Finish",
//             title: "Choose an office",
//             type: "page-redirection"
//         },
//         {
//             type: "assign-me"
//         }
//     ];        
//     let signPost = {
//         steps: steps,
//         virtualOperator: {
//             avatarUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX////0eSnzcAv+9e/+8OfzbgD84NP0dBf++PX4tZX",
//             name: "John Doe",
//             title: "Customer Support"
//         }
//     }
//     console.log('USING SIGNPOST')
//     lsAPI.useSignpost(signPost);
//  })


const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

setTimeout(() => {
    video1.src = "https://vitond.github.io/livesupp_example/mp4.mp4";
    video2.src = "https://vitond.github.io/livesupp_example/mp4.mp4";
    video3.src = "https://vitond.github.io/livesupp_example/mp4.mp4";
    video4.src = "https://vitond.github.io/livesupp_example/mp4.mp4";
}, 1000)

// 1 - Classic fullscreen on video
video1.addEventListener('click', (e) => {e.target.requestFullscreen()});

// 2 - Webkit Fullscreen on video
video2.addEventListener('click', (e) => {e.target.webkitRequestFullscreen()});

// 3 - Classic fullscreen on div
div3.addEventListener('click', (e) => {e.target.requestFullscreen()});

// 4 - Webkit fullscreen on div 
div4.addEventListener('click', (e) => {e.target.webkitRequestFullscreen()});

