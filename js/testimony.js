function setTestimonials() {
    const testimony = [
        {
            testimony: 'Elias Saldhana and team were called at an event where we celebrated and recognized individuals who had contributed to the organization over the years. The team did a fabulous job of capturing key moments, producing beautifully composed photographs of the event.',
            client: 'Ameya Vanjari',
            profession: 'Chief Operating Officer, Tata STRIVE'
        },
        {
            testimony: "They have a keen eye for detail and a creative approach to photography, which truly shone through in every shot. They managed to beautifully capture the essence of our events, showcasing the emotions and atmosphere in each photograph. Their professionalism and ability to make everyone feel at ease during the sessions made the experience enjoyable for all. We highly recommend Vision Shots for any photography needs – they truly excel in their craft!",
            client: 'Fr. Thomas Miranda',
            profession: 'Parish Priest of Christ the King Church, Rasayani'
        },
        {
            testimony: "We've received so many compliments for the photos from friends & family, I must say the quality is stunning. They really know how to capture the perfect moments. My experience with them has made me believe that we don't a need a perfect background to shoot, all we need is a good photographer.",
            client: 'Nazneen Khan',
            profession: 'Client'
        },
        {
            testimony: "The way you guys do your work happily & passionately is quite impressive. You guys have no idea the kind of memories you've preserved for me. Thank you for capturing my precious day.",
            client: 'Jaffar Khan',
            profession: 'Client'
        },
        {
            testimony: "Avani's baby photoshoot was expertly managed by Eshan and Elias, even though she was a bit fussy and running all over the place. They skillfully captured timeless memories for us.",
            client: 'Tushar Ugale',
            profession: 'Client'
        },
        {
            testimony: "I want to express my heartfelt gratitude for beautifully capturing the moments of my wedding. Both my family and I deeply appreciate your work. You have certainly earned the title of our family photographer from this point forward.",
            client: 'Janet Lobo',
            profession: 'Client'
        },
        {
            testimony: "I must say, the quality of your work was excellent and greatly appreciated. You did a fantastic job, and it brought a smile to my face. I'm delighted with your work, and I'm looking forward to more opportunities to work with you in the future.",
            client: 'Daina Baldwal',
            profession: 'Client'
        },
        {
            testimony: "I wanted to reach out and express how truly outstanding your work is. Your ability to capture the best moments of our baby shower ceremony, as well as the other events you've photographed, has been remarkable. You've done an exceptional job. We look forward to working with you regularly as our family photographer in the future. Thank you for your incredible work!",
            client: 'Philip Saldhana',
            profession: 'Client'
        },
        {
            testimony: "I want to extend my sincere gratitude to you and your team for beautifully capturing our moments in a highly professional manner. Your dedication to a systematic approach is truly commendable and reassuring. Keep up the excellent work, and may your growth and success continue to flourish! ",
            client: 'Nevile Mendis',
            profession: 'Client'
        },
    ]
    let testimonialDiv = document.getElementById('testimonial-block');
    let testimonialContent = ''
    testimony.forEach((element, index) => {
        testimonialContent = testimonialContent + `
        <div class="testimonial-item bg-white p-4">
            <p class="mb-0">
            ${element.testimony}
            </p>
            <div class="d-flex align-items-center mb-4">
                <div class="mt-2">
                    <h5 class="mb-1">${element.client}</h5>
                    <span>${element.profession}</span>
                </div>
            </div>
        </div>
        `
        testimonialDiv.innerHTML = testimonialContent
    })
}