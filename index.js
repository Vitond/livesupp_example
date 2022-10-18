console.log('V4');

window.addEventListener('LIVESUPP_LOADED', async event => {
    const lsAPI = event.detail.api
    let fields = [
        {
            type: 'name',
            label: 'Your name',
        },
        {
            type: 'either',
            fields: [
                {
                    type: 'phoneNumber',
                    label: 'Phone number',
                },
                {
                    type: 'email',
                    label: 'Email',
                },
            ],
        }                
    ];        let choices = [
        {
            label: 'Praha',
            pageId: 115,
        },
        {
            label: 'Brno',
            pageId: 116,
        },
        // {
        //     label: 'Ostrava',
        //     pageId: 697060,
        // }
    ];        let steps = [
        {
            fields: fields,
            nextStepButtonText: "Continue",
            title: "Let's get to know you a bit...",
            type: "contact"
        },
        {
            choices: choices,
            nextStepButtonText: "Finish",
            title: "Choose an office",
            type: "page-redirection"
        },
        {
            type: "assign-me"
        }
    ];        
    let signPost = {
        steps: steps,
        virtualOperator: {
            avatarUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX////0eSnzcAv+9e/+8OfzbgD84NP0dBf++PX4tZX",
            name: "John Doe",
            title: "Customer Support"
        }
    }
    lsAPI.useSignpost(signPost);
 })