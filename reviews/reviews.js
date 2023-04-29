//When loaded, get data from reviews array and append to review-box
document.addEventListener('DOMContentLoaded', () => {
    const reviewBox = document.getElementById('review-box');
    const reviewDivs = reviewBox.querySelectorAll('div:not(:first-child)');
    reviewDivs.forEach(function(div) {
        reviewBox.removeChild(div);
      });

      //Get data in reverse to the latest review comes up first
    window.reviews.reverse().forEach((review) => {
        const div = document.createElement('div');
        
        let stars = '';
        for (let i = 0; i < review.rating; i++) {
            stars += '&#9733';
        }
        for (let i = 0; i < 5 - review.rating; i++) {
            stars += '&#9734';
        }
        
        div.innerHTML = `
            <h2>${review.name}</h2>
            <p>Rating: ${stars}</p>
            <h1>${review.title}</h1>
            <p>${review.date}</p>
            <p>${review.content}</p>
        `;
        reviewBox.appendChild(div);
    });
});


//Recieve data from Form when submitted via submit button
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nameInput = document.querySelector('#name');
    const name = nameInput.value.trim();
    
    const titleInput = document.querySelector('#title');
    const title = titleInput.value.trim();
    
    const contentInput = document.querySelector('#content');
    const content = contentInput.value.trim();

    const ratingInput = document.querySelector('#rating');
    const rating = parseInt(ratingInput.value);
    
    const dateInput = document.querySelector('#date');
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const date = new Date().toLocaleDateString(undefined, options);

    const review = {
      name: name,
      date: date,
      title: title,
      content: content,
      rating: rating
    };
    
    window.reviews.reverse(); //Reverse the array since it was reversed while printing
    window.reviews.push(review); 
    nameInput.value = ''; 
    titleInput.value = ''; 
    contentInput.value = ''; 
    ratingInput.value = '5';
    
    //Append to reviews-box
    const reviewBox = document.getElementById('review-box');
    const reviewDivs = reviewBox.querySelectorAll('div:not(:first-child)');
    reviewDivs.forEach(function(div) {
        reviewBox.removeChild(div);
      });

    window.reviews.reverse().forEach((review) => {
        const div = document.createElement('div');
        
        let stars = '';
        for (let i = 0; i < review.rating; i++) {
            stars += '&#9733';
        }
        for (let i = 0; i < 5 - review.rating; i++) {
            stars += '&#9734';
        }
        
        // Insert the review content and stars into the HTML of the div
        div.innerHTML = `
            <h2>${review.name}</h2>
            <p>Rating: ${stars}</p>
            <h1>${review.title}</h1>
            <p>${review.date}</p>
            <p>${review.content}</p>
        `;
        reviewBox.appendChild(div);
    });


  });

//Review array with 5 attributes
window.reviews = [
    {
        name: "Joey Tribianni",
        date: "Feb, 02, 2020",
        title: "How you doin",
        content: "I found another hand twin while playing Blackjack. I don't know how to play this game\
        but everytime I hit, I get a card. I have so many cards now I think I am good at this game!",
        rating: 5
    },
    {
        name: "Susan Tupp",
        date: "June, 12, 2021",
        title: "Sue-tupp!",
        content: "Blackjack is all fun and games until Barney gives me away as a collateral and never finds me back.\
        I wish Lily came along so I am no longer a collateral.",
        rating: 3
    },
    {
        name: "Barney Stinson",
        date: "July, 04, 2021",
        title: "Legen-wait for it-dary!",
        content: "Before I met the Chinese Deal or no Deal game in casino, I would spend my time playing\
        Blackjack with labanese girls and it was Legen-dary! It was great until Ted came into my life\
        and made it less legendary. But hey, Ted still is my best bro. I give 4 stars because it is a close\
        second to my favorite game.",
        rating: 4
    },
    {
        name: "Rick Grimes",
        date: "May, 18, 2022",
        title: "Walking dad",
        content: "Came to Vegas for Judith's 20th birthday. We had to clear some walkers but we had a fun\
        game of Blackjack with Michonne and Maggie. Vegas is no longer Vegas anymore. We are planning to\
        push ourselves up to Utah and possibly get some help from Dustin and Suzie to end this apocalypse.",
        rating: 5
    },
    {
        name: "Timmy Turner",
        date: "Jan, 02, 2023",
        title: "Fairly Old Parents",
        content: "I am 45 years old now. My wish was to win a lot of money from blackjack so I can\
        get some mental treatment and move on with my life. But no matter how many times I shout to my\
        fairy odd parents, they won't answer me anymore. I wish I was 10 again. Is that a zombie? I think\
        I'm hallucinating again.",
        rating: 1
    }
]