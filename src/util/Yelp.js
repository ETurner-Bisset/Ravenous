const apiKey = '9nKRYI1iIt-xmmz7yPwvxuYLhjNzbjY6O5qYzT_nu0vM9ygSjanBXSUW4_wp3_OD1mMe2Ne9WZiZSdRdrDiwZx1wIUHM_33Owp_O8tEsXX_edsXdU22T2sJXAuMFZHYx'


const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: 
        {Authorization: `Bearer ${apiKey}`}}).then((response) => {
            return response.json();}).then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        console.log(business);
                        return {
                        id: business.id,
                        imageSrc: business.image_url,
                        Name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                        }
                    });
                }
            
        });
    }
};
export default Yelp;