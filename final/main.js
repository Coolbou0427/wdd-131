const reviews = [
    {
      productName: "Apple iPhone 13",
      reviewText: "I've been using the iPhone 13 for about 3 months now. The battery life is impressive, easily lasting a full day. The camera is excellent, especially in low-light conditions. My only complaint is the lack of major design changes compared to previous models.",
      rating: 4.5,
      reviewer: "Sarah M."
    },
    {
      productName: "Sony WH-1000XM4 Headphones",
      reviewText: "These headphones have fantastic noise cancellation—perfect for working remotely or traveling. They're super comfortable even after hours of wear. The touch controls can be overly sensitive sometimes, but overall they're worth every penny.",
      rating: 4.8,
      reviewer: "Michael R."
    },
    {
      productName: "Nintendo Switch OLED",
      reviewText: "I upgraded to the OLED version from the original Switch, and the difference in screen quality is noticeable. Colors look amazing, and handheld gameplay is much more enjoyable. Docked performance, however, remains unchanged, which was slightly disappointing.",
      rating: 4.0,
      reviewer: "Jenna T."
    },
    {
      productName: "Apple AirPods (3rd Gen)",
      reviewText: "The audio quality is good, and they're comfortable for casual use. But honestly, they slip out of my ears pretty easily during workouts. Battery life is decent, but I expected better for the price.",
      rating: 3.0,
      reviewer: "Carlos V."
    },
    {
      productName: "Logitech MX Master 3 Mouse",
      reviewText: "I've had this mouse for about a year. It's ergonomic and works great for productivity tasks like video editing and graphic design. However, the Bluetooth occasionally disconnects, forcing me to reconnect manually, which is frustrating during busy days.",
      rating: 3.8,
      reviewer: "Alicia K."
    },
    {
      productName: "Samsung Galaxy Watch 5",
      reviewText: "It's sleek, responsive, and packed with health tracking features. I particularly love the sleep tracking accuracy. However, battery life isn't great—I'm charging it every night, which is a downside.",
      rating: 4.2,
      reviewer: "Liam H."
    },
    {
      productName: "Dell XPS 13 Laptop",
      reviewText: "The laptop is lightweight, fast, and has an incredible display that's perfect for productivity tasks. Unfortunately, the webcam quality is poor, making video calls awkward. Otherwise, it's a solid choice for everyday use.",
      rating: 4.1,
      reviewer: "Emily G."
    },
    {
      productName: "Fitbit Charge 5",
      reviewText: "Good fitness tracker overall. It accurately monitors my steps, heart rate, and workouts. The app is user-friendly and informative. My biggest issue is the screen brightness outdoors—it's very hard to read in direct sunlight.",
      rating: 3.7,
      reviewer: "Danielle P."
    }
  ];
  
  let currentReviewIndex = Math.floor(Math.random() * reviews.length);
  
  function displayReview(review, container) {
    container.innerHTML = `
      <article class="review">
        <h2>${review.productName}</h2>
        <p>${review.reviewText}</p>
        <p><strong>Rating:</strong> ${review.rating} / 5</p>
        <p><em>Reviewed by ${review.reviewer}</em></p>
      </article>
    `;
  }
  
  const reviewDisplay = document.getElementById("reviewDisplay");
  if (reviewDisplay) {
    displayReview(reviews[currentReviewIndex], reviewDisplay);
    document.getElementById("prevBtn").addEventListener("click", function(e) {
      e.preventDefault();
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      displayReview(reviews[currentReviewIndex], reviewDisplay);
    });
    document.getElementById("nextBtn").addEventListener("click", function(e) {
      e.preventDefault();
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      displayReview(reviews[currentReviewIndex], reviewDisplay);
    });
  }
  
  const allReviewsSection = document.getElementById("allReviews");
  if (allReviewsSection) {
    reviews.forEach(review => {
      const reviewHTML = `
        <article class="review">
          <h2>${review.productName}</h2>
          <p>${review.reviewText}</p>
          <p><strong>Rating:</strong> ${review.rating} / 5</p>
          <p><em>Reviewed by ${review.reviewer}</em></p>
        </article>
      `;
      allReviewsSection.insertAdjacentHTML("beforeend", reviewHTML);
    });
  }
  
  if (reviews.length === 0) {
    if (reviewDisplay) reviewDisplay.innerHTML = "<p>No reviews available.</p>";
    if (allReviewsSection) allReviewsSection.innerHTML = "<p>No reviews available.</p>";
  }
  