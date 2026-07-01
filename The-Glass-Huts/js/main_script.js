// JS-функція визначення підтримки WebP
// Додавання webp формату у css
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support === true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// АВТОЗГЕНЕРОВАНО білдером i18n-src/build-i18n.js — не редагувати вручну.
// Джерела: i18n-strings.json, page-strings.json, legal-strings.json
window.THG_I18N = {
    "en": {
        "nav.home": "Home",
        "nav.hut": "The Hut",
        "nav.area": "The Area",
        "nav.booking": "Booking",
        "nav.about": "About Us",
        "nav.faq": "FAQ",
        "common.book_now": "Book now",
        "common.book_a_hut": "Book A Hut",
        "common.read_more": "Read More",
        "common.from": "from",
        "common.per_night": "per night",
        "common.location": "Vesterbord, Denmark",
        "footer.newsletter": "Newsletter",
        "footer.email_placeholder": "Email Address",
        "footer.newsletter_text": "Sign up to our newsletter for special things and receive 10% off your next order.",
        "footer.terms": "TERMS AND CONDITIONS",
        "footer.cancellation": "CANCELLATION POLICY",
        "footer.privacy": "PRIVACY POLICY",
        "hero.title_1": "Find peace in the Forest",
        "hero.subtitle_1": "Come and stay at a hotel hut near <br> the Mariager fjord in Denmark",
        "hero.title_2": "Find peace in Nature",
        "hero.subtitle_2": "Come and stay at a hotel hut in <br> Norway",
        "hero.title_3": "Find peace in the Stars",
        "hero.subtitle_3": "Come and stay at a hotel hut in <br> Iceland",
        "legal.last_updated": "Last updated",
        "legal.note": "This page is a sample template provided for demonstration purposes only and does not constitute legal advice.",
        "terms.title": "Terms and Conditions",
        "cancellation.title": "Cancellation Policy",
        "privacy.title": "Privacy Policy",
        "home.cabins_title": "The Cabins",
        "home.cabins_text": "Our glass cabins are built to disappear into the landscape and let the outside in. Floor-to-ceiling windows frame the forest, the fjord and an open sky, while warm oak, soft linen and quiet lighting keep the interior calm and grounded. Each hut is a private retreat for two, thoughtfully designed so that nothing stands between you and the season unfolding beyond the glass.",
        "home.forest_title": "The Forest",
        "home.forest_text": "Set in ancient woodland near the Mariager fjord, the forest is the reason The Glass Huts exists. Walk out at dawn to birdsong and mist between the trees, follow quiet trails to the water's edge, and return after dark to some of Denmark's clearest, star-filled skies. Here the pace slows, the phone stays in your pocket, and the only schedule is the light moving across the pines.",
        "home.facilities_title": "Facilities",
        "home.facility_mini_fridge": "Mini fridge",
        "home.facility_kitchenette": "Kitchenette",
        "home.facility_coffee_machine": "Coffee machine",
        "home.facility_tea_kettle": "Electric tea kettle",
        "home.facility_parking": "Parking",
        "home.facility_views": "Breathtaking views",
        "home.facility_floor_heating": "Floor heating",
        "home.facility_shower": "Shower",
        "home.facility_flushing_toilets": "Flushing toilets",
        "home.facility_bedding_towels": "Bedding & towels",
        "home.more_about_us": "More about us",
        "home.contact_title": "Stay in touch with us",
        "hut.hero_title": "The Hut",
        "hut.outside_title": "The Outside ",
        "hut.outside_tab_hot_tub": "Hot tub",
        "hut.outside_tab_ev_charger": "EV charger",
        "hut.outside_hot_tub_text": "Step onto your private deck and sink into a wood-fired hot tub while the forest breathes around you. Steam rises against the cool fjord air, the canopy sways overhead, and after dark the water mirrors a sky thick with stars. It is our favourite way to end an evening at The Glass Huts.",
        "hut.outside_ev_charger_text": "Arrive gently and leave fully charged. A dedicated wallbox beside the hut delivers a full overnight charge for most electric vehicles, so you can wander the trails around Mariager fjord by day and drive home effortlessly. Sustainable travel is woven into every part of the stay.",
        "hut.inside_title": "The inside",
        "hut.inside_tab_living": "Living Room",
        "hut.inside_tab_kitchen": "Kitchen",
        "hut.inside_tab_bathroom": "Bathroom",
        "hut.inside_living_text": "Inside, floor-to-ceiling glass walls dissolve the line between shelter and forest. A king-size bed faces the trees, natural oak and warm wool soften every surface, and a wood-burning stove keeps the space glowing. Come nightfall, dim the lights and let the ceiling become your window to the stars.",
        "hut.inside_kitchen_text": "The compact kitchen is quietly complete: an induction hob, espresso machine, filtered water and Danish stoneware, all thoughtfully arranged. Brew your morning coffee and carry it to the glass wall, or prepare a slow supper with produce from local farms while the light shifts across the fjord.",
        "hut.inside_bathroom_text": "The bathroom is a small sanctuary of stone and warm timber, with a rainfall shower, heated floors and plush organic towels. Botanical soaps scented with pine and juniper complete the ritual, so every morning begins calm, grounded and unhurried.",
        "hut.practicalities_title": "Practicalities",
        "hut.practicalities_tab_breakfast": "Breakfast",
        "hut.practicalities_tab_dinner": "Classic Dinner",
        "hut.practicalities_breakfast_text": "Each morning a locally sourced breakfast basket is left quietly at your door: fresh sourdough, farm eggs, seasonal fruit, Danish cheeses and homemade preserves. Enjoy it slowly at the glass wall as the forest wakes, with no need to leave the calm of your hut.",
        "hut.practicalities_dinner_text": "In the evening, order a classic three-course dinner prepared by our kitchen and delivered to your hut. Rooted in Nordic ingredients and the rhythm of the seasons, it pairs beautifully with a glass of wine, the crackle of the stove and the last light fading over Mariager fjord.",
        "area.hero_title": "The Area",
        "area.hero_directions": "Get Directions",
        "area.intro_title": "Vesterbord",
        "area.intro_subtitle": "Where the forest meets the fjord.",
        "area.intro_text": "Tucked into the quiet countryside near the Mariager fjord, Vesterbord is a place of soft light, still water and open sky. Ancient woodland gives way to reed-lined shores, and the days move to the slow rhythm of the tide. Here there are no crowds and no hurry, only birdsong at dawn, mist over the meadows and a horizon wide enough to breathe into. The Glass Huts sit at the heart of it all, close enough to wander out on foot and far enough to feel genuinely alone with nature.",
        "area.map_title": "A short drive from Aarhus, yet a world away from everything.",
        "area.activities_title": "Activities",
        "area.slider1_title": "Restaurants & shopping",
        "area.slider1_tab_1": "Dining",
        "area.slider1_tab_2": "Local shops",
        "area.slider1_text_1": "The kitchens near the fjord cook with the seasons. Expect just-landed fish, smoked and cured the old way, wild herbs foraged from the forest floor, and slow-braised local game served beside vegetables pulled from nearby market gardens. A handful of intimate restaurants and harbourside cafes are a short drive away, each pouring crisp Danish beer and thoughtful natural wines. Ask us to reserve your table and we will point you to our own quiet favourites.",
        "area.slider1_text_2": "Browse the region at an unhurried pace. Independent studios and workshops sell hand-thrown ceramics, woven textiles and Scandinavian homeware made by makers who live and work along the coast. Farm stalls and delis brim with honey, cheese, rye bread and preserves, everything you need to lay out a slow breakfast back at your hut. The nearby town centres keep boutiques and galleries within an easy stroll, so an afternoon of gentle browsing never feels rushed.",
        "area.slider2_title": "Experiences in nature",
        "area.slider2_tab_1": "On the water",
        "area.slider2_tab_2": "Forest & trails",
        "area.slider2_text_1": "The Mariager fjord is one of Denmark's longest and most sheltered, its calm water made for slow mornings. Slip out by kayak or stand-up paddleboard at first light, drift past reed beds where herons stand watch, and let the ripple of the paddle be the only sound. In summer the shallow inlets are warm enough for a swim, and guided boat trips reveal seals basking on the sandbanks near the fjord's mouth.",
        "area.slider2_text_2": "Beyond your door, marked trails thread through beech and pine, past clearings carpeted with wood anemones in spring and glowing gold in autumn. Walk quietly and you may glimpse roe deer at the treeline, red squirrels overhead or a white-tailed eagle circling the fjord. When darkness falls the low horizon and near-total lack of light pollution turn the sky into a canopy of stars, the finest kind of stargazing right outside your glass wall.",
        "area.slider3_title": "Go for a drive",
        "area.slider3_tab_1": "Coastal route",
        "area.slider3_tab_2": "Day trips",
        "area.slider3_text_1": "Some of the region's finest scenery unfolds through the windscreen. Follow the winding lanes that trace the fjord, where the road rises over rolling farmland then dips back down to water shining between the trees. Pull over at the old harbour towns of Mariager and Hobro, wander their cobbled streets and half-timbered houses, and stop wherever a view or a coffee tempts you. It is a drive best taken slowly, with the windows down.",
        "area.slider3_text_2": "Set out a little further and the day opens up. The salt meadows and birdlife of the Lille Vildmose reserve lie within easy reach, as do Viking-age burial mounds and windswept Baltic beaches. The city of Aarhus, with its art museums, design shops and harbour restaurants, is under an hour away, an effortless contrast to the quiet of the huts. Whichever direction you choose, you will be back by dusk in time to watch the light fade over the fjord.",
        "area.slider4_title": "Small-town charm",
        "area.slider4_tab_1": "Old town",
        "area.slider4_tab_2": "Culture",
        "area.slider4_text_1": "Mariager is known across Denmark as the town of roses, a cluster of pastel cottages, climbing blooms and cobbled squares that seem to have paused somewhere in the last century. Wander lanes lined with tiny craft shops and tea rooms, pause in the courtyard of the medieval abbey, and let the pace of a place with barely two thousand souls settle over you. It is the kind of afternoon that ends with an ice cream by the water.",
        "area.slider4_text_2": "Behind the postcard streets there is real living history to explore. Ride the vintage steam railway that puffs along the fjord in summer, step aboard the salt centre to see how the region's white gold was once harvested, or time your visit for a village market or midsummer bonfire. Small galleries and local musicians keep the towns quietly alive after dark, and everyone you meet has the time for an unhurried conversation.",
        "booking.hero_title": "Booking",
        "booking.services_title": "Choose Additional Services",
        "booking.service_1_name": "Fresh Breakfast for one",
        "booking.service_1_title": "Sunrise Breakfast Basket",
        "booking.service_1_text": "A locally sourced morning spread delivered to your hut door: warm sourdough, Danish cheeses, seasonal fruit, house granola and freshly brewed coffee. Enjoy it in bed or on your private terrace as the forest wakes.",
        "booking.service_2_name": "Private Chef Dinner",
        "booking.service_2_title": "Three-Course Nordic Dinner",
        "booking.service_2_text": "Our chef prepares a seasonal three-course menu built around Mariager fjord seafood and produce from nearby farms, served in your hut by candlelight. Wine pairings and vegetarian options available on request.",
        "booking.service_3_name": "Wood-Fired Hot Tub",
        "booking.service_3_title": "Private Wood-Fired Hot Tub",
        "booking.service_3_text": "We heat a cedar hot tub beside your hut so it is ready at dusk. Soak under an open sky, watch the stars appear over the treetops and let the day melt away. Towels and robes are included.",
        "booking.service_4_name": "In-Hut Massage",
        "booking.service_4_title": "In-Hut Wellness Massage",
        "booking.service_4_text": "A qualified therapist comes to your hut for a 60-minute deep-relaxation massage using organic Nordic oils. Choose a slot on arrival day or before dinner and unwind completely in your own space.",
        "booking.service_5_name": "Guided Forest Walk",
        "booking.service_5_title": "Guided Sunrise Forest Walk",
        "booking.service_5_text": "Join a local guide for a gentle two-hour walk through the woodland around the fjord, learning to read the forest, forage in season and spot the wildlife that shares this quiet corner of Denmark.",
        "booking.service_6_name": "Stargazing Kit",
        "booking.service_6_title": "Stargazing Kit & Star Map",
        "booking.service_6_text": "Away from city light, the night sky here is extraordinary. We leave a telescope, warm blankets and a seasonal star map in your hut so you can trace constellations from your bed through the glass roof.",
        "booking.rules_title": "Hut Rules",
        "booking.rules_1": "Check-in is from 15:00 and check-out is by 11:00. Let us know your arrival time and we will have your hut warm and ready.",
        "booking.rules_2": "The Glass Huts are a quiet, adults-focused retreat. We keep evenings peaceful so every guest can enjoy the stillness of the forest.",
        "booking.rules_3": "Smoking is not permitted inside the huts. Open flames stay in the designated fire pit and wood-fired tub only.",
        "booking.rules_4": "Please treat the huts and their surroundings gently, so the next guest can arrive to the same untouched calm.",
        "booking.cancellation_title": "Cancellation Policy",
        "booking.cancellation_1": "Cancel free of charge up to 14 days before arrival and receive a full refund of your payment.",
        "booking.cancellation_2": "Cancel between 14 and 7 days before arrival and we retain 50% of the total stay.",
        "booking.cancellation_3": "Cancellations within 7 days of arrival are non-refundable, though dates can often be moved subject to availability.",
        "booking.cancellation_4": "Added services and experiences can be adjusted up to 48 hours before your stay begins.",
        "booking.know_title": "Good to Know",
        "booking.know_1": "Each hut sleeps two guests and includes a private bathroom, kitchenette, heating and a glass roof made for stargazing.",
        "booking.know_2": "Parking is a short, signposted walk from the huts to keep the setting calm and car-free. We help carry your bags on arrival.",
        "booking.know_3": "Wi-Fi is available, but we gently encourage you to disconnect and let the forest set the pace of your stay.",
        "booking.know_4": "Have a special request or occasion in mind? Add a note at checkout and we will do our best to arrange it.",
        "booking.read_faq": "Read Faq",
        "booking.cart_price_per_night": "<span>3.200kr</span> / night",
        "booking.cart_check_in": "Check in",
        "booking.cart_check_out": "Check out",
        "booking.cart_guests": "Guests",
        "booking.summary_nights": "Nights",
        "booking.summary_services": "Additional services",
        "booking.summary_cleaning": "Cleaning fee",
        "booking.summary_discount": "Discount",
        "booking.summary_guest_extra": "Extra guest",
        "booking.summary_total": "Total",
        "booking.coupon_placeholder": "Coupon Code",
        "booking.coupon_apply": "Apply",
        "booking.service_add": "Add to booking",
        "booking.coupon_applied": "Applied",
        "booking.coupon_invalid": "Invalid code",
        "about.hero_title": "About Us",
        "about.hero_contact_us": "Contact Us",
        "about.hero_read_faq": "Read Faq",
        "about.quote_title": "“ We built The Glass Huts for the moment you exhale. A place where the forest, the fjord and the night sky become the only things asking for your attention. ”",
        "about.quote_text": "It began with a simple wish: to stay inside nature without ever stepping away from comfort. So we set a handful of glass cabins gently into the woodland above the Mariager fjord, where the light shifts all day and the stars arrive uninterrupted at night. Every hut is designed to disappear into its surroundings, leaving you with warmth, quiet and a view that never repeats. This is our love letter to slow living, and to everyone who chooses to spend a few honest days closer to the trees.",
        "about.gallery_title": "The people, the place, <br> and the quiet in between",
        "about.gallery_text": "We are a small Danish team of designers, hosts and nature lovers who look after every hut by hand. From the morning fog over the fjord to the last lantern lit at dusk, we tend the details so your only task is to rest.",
        "about.contact_title": "Stay in touch with us",
        "about.form_first_name": "First Name",
        "about.form_last_name": "Last Name",
        "about.form_email": "Email",
        "about.form_subject": "Subject",
        "about.form_message": "Message",
        "about.form_send": "Send",
        "about.with_love_title": "From Denmark <br> With Love...",
        "faq.q_prices_title": "Prices",
        "faq.a_prices_1": "Rates start from €320 per night and vary with the season, the hut you choose and the length of your stay. Every night includes private access to your glass cabin, the surrounding forest and the shared wellness sauna by the fjord.",
        "faq.a_prices_2": "Stays of three nights or more receive a reduced nightly rate, and midweek arrivals are gentler on both your wallet and your calm. Live pricing for your exact dates always appears at the final step of the booking flow.",
        "faq.a_prices_3": "There are no hidden fees. Cleaning, fresh linen, firewood and local taxes are already folded into the price you see, so the number you book is the number you pay.",
        "faq.q_cancellation_title": "Cancellation Policy",
        "faq.a_cancellation_1": "Plans change, and we understand. Cancel at least 14 days before your arrival and you will receive a full refund, no questions asked.",
        "faq.a_cancellation_2": "Cancellations made between 14 and 7 days before check-in are refunded at fifty percent. Within 7 days of arrival the first night is non-refundable, as your hut is held exclusively for you.",
        "faq.a_cancellation_3": "If you would rather move your escape than cancel it, we are happy to reschedule once at no charge, subject to availability. Just write to us and we will find you a new date.",
        "faq.q_walk_title": "The Walk up to glass hut",
        "faq.a_walk_1": "Each hut sits a short stroll from the parking clearing, reached by a soft forest path of roughly 300 to 500 metres. The walk is part of the arrival ritual: it lets the world fall quiet before you reach your door.",
        "faq.a_walk_2": "The trail is gently graded and lit at dusk by low lanterns, though sturdy shoes are wise after rain. We provide a small trolley at the car park so luggage and groceries make the journey easily.",
        "faq.a_walk_3": "If mobility is a concern, let us know when you book. Two of our huts sit closest to the clearing and we can arrange assistance with your bags on arrival and departure.",
        "faq.q_capacity_title": "Capacity",
        "faq.a_capacity_1": "Every glass hut is designed for two, with one generous king bed framed by the forest and the sky. It is an intimate space, made for couples, close friends or a little solitude.",
        "faq.a_capacity_2": "Selected huts can welcome a third guest on a comfortable sofa daybed, ideal for a small family with one child. Please note the extra guest when booking so we can prepare the room and linen for you.",
        "faq.a_capacity_3": "For groups travelling together, several huts can be reserved side by side so you share the forest yet keep your own quiet corner. Contact us and we will arrange the neighbouring cabins.",
        "faq.q_pets_title": "Pets",
        "faq.a_pets_1": "Well-behaved dogs are warmly welcome in two of our pet-friendly huts. Simply let us know when you book so we can prepare the right cabin, a water bowl and a cosy blanket for your companion.",
        "faq.a_pets_2": "A small cleaning fee of €30 per stay applies, and we ask that pets are not left alone in the hut. The forest trails around the retreat are perfect for long, leisurely walks together.",
        "faq.a_pets_3": "To protect the calm and the wildlife, we keep the retreat dog-only and ask that pets stay leashed in shared areas. If you have any questions about travelling with your animal, just reach out before you arrive.",
        "faq.q_checkin_title": "Check-in / Check-out",
        "faq.a_checkin_1": "Check-in opens from 15:00, giving us time to air the hut and lay the fire before you arrive. Check-out is by 11:00, when the forest is at its freshest for your final morning coffee.",
        "faq.a_checkin_2": "Arrival is contactless and calm. A few days before your stay we send a personal door code and a simple map to your hut, so you can slip straight into the quiet without a reception desk.",
        "faq.a_checkin_3": "Arriving early or leaving late? Depending on the day we can often hold your bags or extend your hut for a small fee. Just ask, and we will do our best to make the day unhurried.",
        "payment.additional_services_title": "Selected Services",
        "payment.no_services": "No additional services selected.",
        "payment.summary_hut_name": "The Glass Hut",
        "payment.summary_location": "Vesterbord, Denmark",
        "payment.table_check_in": "Check in",
        "payment.table_check_out": "Check out",
        "payment.table_guests": "Guests",
        "payment.line_item_stay": "3 nights in a glass hut",
        "payment.line_item_breakfast": "Forest breakfast basket",
        "payment.line_item_wellness": "Wellness & sauna access",
        "payment.line_item_discount": "Early-bird discount",
        "payment.total_label": "Total",
        "forms.toast_subscribed": "Thanks for subscribing!",
        "forms.invalid": "Please fill in the highlighted fields correctly.",
        "about.toast_sent": "Thank you! We'll get back to you soon.",
        "payment.form_title": "Your details",
        "payment.form_first_name": "First name",
        "payment.form_last_name": "Last name",
        "payment.form_email": "Email",
        "payment.form_phone": "Phone",
        "payment.select_placeholder": "Choose a payment method",
        "payment.method_card": "Credit / debit card",
        "payment.method_paypal": "PayPal",
        "payment.method_bank": "Bank transfer",
        "payment.confirm_button": "Confirm booking",
        "payment.toast_thanks": "Thank you! We'll contact you shortly.",
        "terms.s1_heading": "1. Introduction",
        "terms.s1_text": "These Terms and Conditions govern your booking and stay at The Glass Huts, our collection of glass cabins near the Mariager fjord in Vesterbord, Denmark. By making a reservation or staying with us, you agree to the terms set out below.",
        "terms.s2_heading": "2. Bookings and Payment",
        "terms.s2_text1": "A reservation is confirmed once we have received your booking request and full or partial payment as indicated during checkout. Prices are shown in euros (EUR) per hut, per night, and include applicable taxes unless stated otherwise.",
        "terms.s2_text2": "We reserve the right to cancel a reservation if payment is not completed within the time specified at booking. Any promotional codes or discounts must be applied at the time of booking and cannot be added retroactively.",
        "terms.s3_heading": "3. Check-in and Check-out",
        "terms.s3_text": "Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be arranged in advance, subject to availability and an additional fee. Please contact us if you expect to arrive outside our reception hours.",
        "terms.s4_heading": "4. Guest Responsibilities",
        "terms.s4_text": "Guests are asked to treat each hut and the surrounding nature with care. Smoking is not permitted inside the huts, and open fires are only allowed in the designated areas. You are responsible for any damage caused during your stay beyond normal wear and tear.",
        "terms.s5_heading": "5. Liability",
        "terms.s5_text": "The Glass Huts is not liable for loss of or damage to personal belongings, nor for injury arising from the misuse of facilities or failure to follow posted safety guidance. Our huts are located in a natural environment, and guests enter surrounding trails and waterways at their own risk.",
        "terms.s6_heading": "6. Governing Law",
        "terms.s6_text": "These Terms are governed by the laws of Denmark. Any dispute arising from your booking or stay shall be subject to the exclusive jurisdiction of the Danish courts.",
        "terms.s7_heading": "7. Contact",
        "terms.s7_text": "Questions about these Terms can be sent to <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>. We are happy to help before, during and after your stay.",
        "cancellation.s1_heading": "1. Overview",
        "cancellation.s1_text": "We understand that plans can change. This policy explains how cancellations and date changes are handled for stays at The Glass Huts. The conditions that apply to your booking are shown at checkout and in your confirmation email.",
        "cancellation.s2_heading": "2. Free Cancellation",
        "cancellation.s2_text": "Cancellations made 14 days or more before your arrival date are fully refundable, minus any non-refundable booking fee shown at checkout. To cancel, use the link in your confirmation email or contact our team directly.",
        "cancellation.s3_heading": "3. Partial Refunds",
        "cancellation.s3_text": "Cancellations made between 13 and 3 days before arrival are eligible for a 50% refund of the accommodation cost. Cancellations made within 48 hours of arrival are non-refundable, as the hut is reserved exclusively for you.",
        "cancellation.s4_heading": "4. No-show",
        "cancellation.s4_text": "If you do not arrive on your check-in date and have not contacted us, the reservation is treated as a no-show and the full amount is charged. Your hut will be released after the first night.",
        "cancellation.s5_heading": "5. Changing Your Dates",
        "cancellation.s5_text": "You may request a date change up to 7 days before arrival, subject to availability and any difference in the nightly rate. We will always do our best to find dates that suit you rather than cancel your stay.",
        "cancellation.s6_heading": "6. Refund Processing",
        "cancellation.s6_text": "Approved refunds are returned to the original payment method within 5 to 10 business days. Depending on your bank or card provider, it may take a little longer for the funds to appear on your statement.",
        "cancellation.s7_heading": "7. Contact",
        "cancellation.s7_text": "To cancel, change your dates, or ask about a refund, email us at <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a> and we will take care of the rest.",
        "privacy.s1_heading": "1. Introduction",
        "privacy.s1_text": "This Privacy Policy explains how The Glass Huts collects, uses and protects the personal information you share with us when you visit our website or make a booking. We are committed to handling your data responsibly and transparently.",
        "privacy.s2_heading": "2. Information We Collect",
        "privacy.s2_text": "We collect the details you provide when booking, such as your name, email address, phone number and payment information. We also collect limited technical data — such as your browser type and pages visited — to help us improve the site.",
        "privacy.s3_heading": "3. How We Use Your Information",
        "privacy.s3_text": "Your information is used to confirm and manage your reservation, to communicate with you about your stay, and to send you offers only when you have asked to receive our newsletter. We do not sell your personal data to anyone.",
        "privacy.s4_heading": "4. Cookies",
        "privacy.s4_text": "Our website uses cookies to remember your preferences — including your chosen language — and to understand how visitors use the site. You can disable cookies in your browser settings, though some features may not work as expected.",
        "privacy.s5_heading": "5. Data Sharing",
        "privacy.s5_text": "We share information only with trusted service providers who help us operate — for example, payment processors and email services — and only to the extent needed to deliver our service. These partners are required to protect your data.",
        "privacy.s6_heading": "6. Your Rights",
        "privacy.s6_text": "You have the right to access, correct or delete the personal information we hold about you, and to withdraw consent for marketing at any time. To exercise these rights, simply get in touch with us.",
        "privacy.s7_heading": "7. Contact",
        "privacy.s7_text": "If you have any questions about this Privacy Policy or your data, please contact us at <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>."
    },
    "da": {
        "nav.home": "Hjem",
        "nav.hut": "Hytten",
        "nav.area": "Området",
        "nav.booking": "Booking",
        "nav.about": "Om os",
        "nav.faq": "FAQ",
        "common.book_now": "Book nu",
        "common.book_a_hut": "Book en hytte",
        "common.read_more": "Læs mere",
        "common.from": "fra",
        "common.per_night": "pr. nat",
        "common.location": "Vesterbord, Danmark",
        "footer.newsletter": "Nyhedsbrev",
        "footer.email_placeholder": "E-mailadresse",
        "footer.newsletter_text": "Tilmeld dig vores nyhedsbrev for særlige tilbud og få 10 % rabat på din næste booking.",
        "footer.terms": "VILKÅR OG BETINGELSER",
        "footer.cancellation": "AFBESTILLINGSPOLITIK",
        "footer.privacy": "PRIVATLIVSPOLITIK",
        "hero.title_1": "Find ro i skoven",
        "hero.subtitle_1": "Kom og bo i en hotelhytte nær <br> Mariager fjord i Danmark",
        "hero.title_2": "Find ro i naturen",
        "hero.subtitle_2": "Kom og bo i en hotelhytte i <br> Norge",
        "hero.title_3": "Find ro under stjernerne",
        "hero.subtitle_3": "Kom og bo i en hotelhytte på <br> Island",
        "legal.last_updated": "Senest opdateret",
        "legal.note": "Denne side er en eksempelskabelon, der udelukkende er til demonstrationsformål og udgør ikke juridisk rådgivning.",
        "terms.title": "Vilkår og betingelser",
        "cancellation.title": "Afbestillingspolitik",
        "privacy.title": "Privatlivspolitik",
        "home.cabins_title": "Hytterne",
        "home.cabins_text": "Vores glashytter er skabt til at forsvinde ind i landskabet og lukke naturen ind. Vinduer fra gulv til loft indrammer skoven, fjorden og den åbne himmel, mens varm eg, blødt linned og dæmpet belysning holder rummet roligt og nærværende. Hver hytte er et privat tilflugtssted for to, gennemtænkt indrettet, så intet står mellem dig og årstiden, der folder sig ud på den anden side af glasset.",
        "home.forest_title": "Skoven",
        "home.forest_text": "Placeret i gammel skov nær Mariager fjord er skoven selve grunden til, at The Glass Huts findes. Gå ud ved daggry til fuglesang og tåge mellem træerne, følg stille stier ned til vandkanten, og vend efter mørkets frembrud tilbage til nogle af Danmarks klareste, stjernefyldte himle. Her sænkes tempoet, telefonen bliver i lommen, og den eneste tidsplan er lyset, der bevæger sig hen over fyrretræerne.",
        "home.facilities_title": "Faciliteter",
        "home.facility_mini_fridge": "Minikøleskab",
        "home.facility_kitchenette": "Tekøkken",
        "home.facility_coffee_machine": "Kaffemaskine",
        "home.facility_tea_kettle": "Elkedel",
        "home.facility_parking": "Parkering",
        "home.facility_views": "Betagende udsigt",
        "home.facility_floor_heating": "Gulvvarme",
        "home.facility_shower": "Brusebad",
        "home.facility_flushing_toilets": "Toilet med skyl",
        "home.facility_bedding_towels": "Sengetøj & håndklæder",
        "home.more_about_us": "Mere om os",
        "home.contact_title": "Hold kontakten med os",
        "hut.hero_title": "Hytten",
        "hut.outside_title": "Udenfor ",
        "hut.outside_tab_hot_tub": "Boblebad",
        "hut.outside_tab_ev_charger": "Elbil-oplader",
        "hut.outside_hot_tub_text": "Træd ud på din private terrasse og sænk dig ned i et brændefyret boblebad, mens skoven ånder omkring dig. Dampen stiger op mod den kølige fjordluft, trækronerne svajer over dig, og efter mørkets frembrud spejler vandet en himmel fuld af stjerner. Det er vores yndlingsmåde at afslutte en aften på The Glass Huts.",
        "hut.outside_ev_charger_text": "Ankom roligt og tag afsted fuldt opladet. En dedikeret wallbox ved hytten giver de fleste elbiler en fuld opladning natten over, så du kan vandre på stierne omkring Mariager fjord om dagen og køre hjem uden bekymringer. Bæredygtig rejse er vævet ind i hver del af opholdet.",
        "hut.inside_title": "Indenfor",
        "hut.inside_tab_living": "Stue",
        "hut.inside_tab_kitchen": "Køkken",
        "hut.inside_tab_bathroom": "Badeværelse",
        "hut.inside_living_text": "Indenfor opløser gulv-til-loft glasvægge grænsen mellem ly og skov. En kingsize-seng vender mod træerne, naturlig eg og varm uld blødgør hver overflade, og en brændeovn holder rummet lunt og glødende. Når mørket falder på, dæmp lyset og lad loftet blive dit vindue til stjernerne.",
        "hut.inside_kitchen_text": "Det kompakte køkken er stille velforsynet: induktionskogeplade, espressomaskine, filtreret vand og dansk stentøj, alt omhyggeligt arrangeret. Bryg din morgenkaffe og tag den med hen til glasvæggen, eller tilbered en rolig aftensmad med råvarer fra lokale gårde, mens lyset skifter hen over fjorden.",
        "hut.inside_bathroom_text": "Badeværelset er et lille tilflugtssted af sten og varmt træ, med regnbruser, gulvvarme og bløde økologiske håndklæder. Botaniske sæber med duft af fyr og enebær fuldender ritualet, så hver morgen begynder roligt, jordnært og uden hastværk.",
        "hut.practicalities_title": "Det praktiske",
        "hut.practicalities_tab_breakfast": "Morgenmad",
        "hut.practicalities_tab_dinner": "Klassisk middag",
        "hut.practicalities_breakfast_text": "Hver morgen stilles en morgenmadskurv med lokale råvarer diskret ved din dør: friskt surdejsbrød, gårdæg, sæsonens frugt, danske oste og hjemmelavet marmelade. Nyd den i ro ved glasvæggen, mens skoven vågner, uden at skulle forlade hyttens fred.",
        "hut.practicalities_dinner_text": "Om aftenen kan du bestille en klassisk tre-retters middag tilberedt af vores køkken og leveret til din hytte. Med rod i nordiske råvarer og årstidernes rytme passer den smukt til et glas vin, brændeovnens knitren og det sidste lys, der forsvinder over Mariager fjord.",
        "area.hero_title": "Området",
        "area.hero_directions": "Find vej",
        "area.intro_title": "Vesterbord",
        "area.intro_subtitle": "Hvor skoven møder fjorden.",
        "area.intro_text": "Gemt væk i det stille landskab nær Mariager fjord er Vesterbord et sted med blødt lys, roligt vand og åben himmel. Ældgammel skov glider over i sivklædte bredder, og dagene følger tidevandets langsomme rytme. Her er hverken menneskemængder eller hastværk, kun fuglesang ved daggry, tåge over engene og en horisont, der er vid nok til at ånde ind. The Glass Huts ligger midt i det hele, nær nok til at vandre ud til fods og fjernt nok til virkelig at føle sig alene med naturen.",
        "area.map_title": "En kort køretur fra Aarhus, men alligevel en verden væk fra alt.",
        "area.activities_title": "Aktiviteter",
        "area.slider1_title": "Restauranter & shopping",
        "area.slider1_tab_1": "Spisesteder",
        "area.slider1_tab_2": "Lokale butikker",
        "area.slider1_text_1": "Køkkenerne nær fjorden laver mad efter årstiderne. Forvent nyfanget fisk, røget og saltet på den gamle måde, vilde urter samlet fra skovbunden og langtidsbraiseret lokalt vildt serveret med grøntsager fra nærliggende køkkenhaver. En håndfuld intime restauranter og havnecaféer ligger en kort køretur væk og skænker frisk dansk øl og velovervejede naturvine. Bed os om at reservere dit bord, så peger vi dig mod vores egne stille favoritter.",
        "area.slider1_text_2": "Udforsk egnen i et roligt tempo. Uafhængige værksteder og atelierer sælger håndlavet keramik, vævede tekstiler og skandinavisk boligudstyr skabt af folk, der bor og arbejder langs kysten. Gårdboder og delikatesser bugner af honning, ost, rugbrød og syltede sager, alt hvad du behøver til en langsom morgenmad tilbage i din hytte. De nærliggende bymidter holder butikker og gallerier inden for en let spadseretur, så en eftermiddag med afslappet kig aldrig føles forjaget.",
        "area.slider2_title": "Oplevelser i naturen",
        "area.slider2_tab_1": "På vandet",
        "area.slider2_tab_2": "Skov & stier",
        "area.slider2_text_1": "Mariager fjord er en af Danmarks længste og mest beskyttede, og dens rolige vand er skabt til langsomme morgener. Glid ud i kajak eller på paddleboard ved daggry, driv forbi sivbevoksninger, hvor hejrer holder vagt, og lad åretaget være den eneste lyd. Om sommeren er de lave vige varme nok til en dukkert, og guidede bådture afslører sæler, der soler sig på sandbankerne nær fjordens munding.",
        "area.slider2_text_2": "Uden for din dør snor afmærkede stier sig gennem bøg og fyr, forbi lysninger dækket af hvide anemoner om foråret og glødende gyldne om efteråret. Gå stille, så kan du få øje på rådyr ved skovbrynet, egern over dig eller en havørn, der kredser over fjorden. Når mørket falder på, forvandler den lave horisont og den næsten totale mangel på lysforurening himlen til et hvælv af stjerner, den fineste stjernekiggeri lige uden for din glasvæg.",
        "area.slider3_title": "Tag på køretur",
        "area.slider3_tab_1": "Kystrute",
        "area.slider3_tab_2": "Dagsture",
        "area.slider3_text_1": "Noget af egnens smukkeste landskab folder sig ud gennem forruden. Følg de snoede veje langs fjorden, hvor vejen stiger op over bakket landbrugsjord og dykker ned mod vand, der glimter mellem træerne. Hold ind ved de gamle havnebyer Mariager og Hobro, gå rundt i deres brostensbelagte gader og bindingsværkshuse, og stop, hvor en udsigt eller en kaffe frister. Det er en køretur, der bedst nydes langsomt med vinduerne nede.",
        "area.slider3_text_2": "Kør lidt længere, og dagen åbner sig. Saltengene og fuglelivet i Lille Vildmose ligger inden for rækkevidde, ligesom vikingetidens gravhøje og forblæste østersøstrande. Byen Aarhus med kunstmuseer, designbutikker og havnerestauranter er under en time væk, en ubesværet kontrast til hytternes ro. Uanset hvilken retning du vælger, er du tilbage ved skumringstid i tide til at se lyset falme over fjorden.",
        "area.slider4_title": "Charmerende småbyer",
        "area.slider4_tab_1": "Den gamle by",
        "area.slider4_tab_2": "Kultur",
        "area.slider4_text_1": "Mariager er kendt i hele Danmark som rosernes by, en samling af pastelfarvede huse, klatrende blomster og brostensbelagte torve, der ser ud til at have gjort holdt et sted i forrige århundrede. Vandr ad stræder med små håndværksbutikker og tesaloner, gør holdt i klostergården fra middelalderen, og lad tempoet i en by med knap to tusind sjæle sænke sig over dig. Det er den slags eftermiddag, der slutter med en is nede ved vandet.",
        "area.slider4_text_2": "Bag de postkortsmukke gader venter levende historie på at blive udforsket. Kør med det gamle damptog, der pruster langs fjorden om sommeren, træd ind på saltcentret og se, hvordan egnens hvide guld engang blev høstet, eller planlæg dit besøg efter et landsbymarked eller et midsommerbål. Små gallerier og lokale musikere holder byerne stille i live efter mørkets frembrud, og alle, du møder, har tid til en uforstyrret samtale.",
        "booking.hero_title": "Booking",
        "booking.services_title": "Vælg ekstra ydelser",
        "booking.service_1_name": "Frisk morgenmad til én",
        "booking.service_1_title": "Morgengrykurv",
        "booking.service_1_text": "En lokalt produceret morgenanretning leveret til din hyttes dør: varmt surdejsbrød, danske oste, sæsonens frugt, husets granola og friskbrygget kaffe. Nyd den i sengen eller på din private terrasse, mens skoven vågner.",
        "booking.service_2_name": "Middag med privat kok",
        "booking.service_2_title": "Nordisk middag i tre retter",
        "booking.service_2_text": "Vores kok tilbereder en sæsonbestemt trerettersmenu bygget op omkring fisk og skaldyr fra Mariager fjord og råvarer fra nærliggende gårde, serveret i din hytte ved levende lys. Vinmenu og vegetariske retter kan bestilles.",
        "booking.service_3_name": "Brændefyret badekar",
        "booking.service_3_title": "Privat brændefyret badekar",
        "booking.service_3_text": "Vi varmer et cedertræsbadekar ved siden af din hytte, så det er klar i skumringen. Slap af under åben himmel, se stjernerne dukke op over trætoppene, og lad dagen smelte væk. Håndklæder og badekåber er inkluderet.",
        "booking.service_4_name": "Massage i hytten",
        "booking.service_4_title": "Wellnessmassage i hytten",
        "booking.service_4_text": "En uddannet terapeut kommer til din hytte til en 60-minutters dybt afslappende massage med økologiske nordiske olier. Vælg en tid på ankomstdagen eller før middagen, og slap helt af i dine egne omgivelser.",
        "booking.service_5_name": "Guidet skovtur",
        "booking.service_5_title": "Guidet skovtur ved solopgang",
        "booking.service_5_text": "Tag med en lokal guide på en rolig to-timers tur gennem skoven omkring fjorden, hvor du lærer at læse skoven, samle spiselige planter i sæsonen og få øje på det dyreliv, der deler denne stille del af Danmark.",
        "booking.service_6_name": "Stjernekiggersæt",
        "booking.service_6_title": "Stjernekiggersæt og stjernekort",
        "booking.service_6_text": "Væk fra byens lys er nattehimlen her helt særlig. Vi lægger et teleskop, varme tæpper og et sæsonbestemt stjernekort i din hytte, så du kan følge stjernebillederne fra sengen gennem glastaget.",
        "booking.rules_title": "Hytteregler",
        "booking.rules_1": "Indtjekning er fra kl. 15.00 og udtjekning senest kl. 11.00. Fortæl os dit ankomsttidspunkt, så gør vi din hytte varm og klar.",
        "booking.rules_2": "The Glass Huts er et roligt refugium for voksne. Vi holder aftenerne fredfyldte, så alle gæster kan nyde skovens stilhed.",
        "booking.rules_3": "Rygning er ikke tilladt inde i hytterne. Åben ild må kun være i det anviste bålsted og det brændefyrede badekar.",
        "booking.rules_4": "Behandl venligst hytterne og deres omgivelser nænsomt, så den næste gæst kan ankomme til den samme uberørte ro.",
        "booking.cancellation_title": "Afbestillingspolitik",
        "booking.cancellation_1": "Afbestil gratis op til 14 dage før ankomst og få hele din betaling refunderet.",
        "booking.cancellation_2": "Afbestiller du mellem 14 og 7 dage før ankomst, beholder vi 50 % af det samlede ophold.",
        "booking.cancellation_3": "Afbestillinger inden for 7 dage før ankomst refunderes ikke, men datoerne kan ofte flyttes, hvis der er ledige pladser.",
        "booking.cancellation_4": "Tilkøbte ydelser og oplevelser kan ændres op til 48 timer, før dit ophold begynder.",
        "booking.know_title": "Godt at vide",
        "booking.know_1": "Hver hytte har plads til to gæster og omfatter eget badeværelse, tekøkken, varme og et glastag skabt til stjernekiggeri.",
        "booking.know_2": "Parkeringen ligger en kort, skiltet gåtur fra hytterne for at holde omgivelserne rolige og bilfrie. Vi hjælper med at bære din bagage ved ankomst.",
        "booking.know_3": "Der er Wi-Fi, men vi opfordrer dig blidt til at koble fra og lade skoven sætte tempoet for dit ophold.",
        "booking.know_4": "Har du et særligt ønske eller en anledning i tankerne? Tilføj en note ved betaling, så gør vi vores bedste for at arrangere det.",
        "booking.read_faq": "Læs FAQ",
        "booking.cart_price_per_night": "<span>3.200kr</span> / nat",
        "booking.cart_check_in": "Indtjekning",
        "booking.cart_check_out": "Udtjekning",
        "booking.cart_guests": "Gæster",
        "booking.summary_nights": "Nætter",
        "booking.summary_services": "Ekstra ydelser",
        "booking.summary_cleaning": "Rengøringsgebyr",
        "booking.summary_discount": "Rabat",
        "booking.summary_guest_extra": "Ekstra gæst",
        "booking.summary_total": "I alt",
        "booking.coupon_placeholder": "Rabatkode",
        "booking.coupon_apply": "Anvend",
        "booking.service_add": "Tilføj til booking",
        "booking.coupon_applied": "Anvendt",
        "booking.coupon_invalid": "Ugyldig kode",
        "about.hero_title": "Om os",
        "about.hero_contact_us": "Kontakt os",
        "about.hero_read_faq": "Læs FAQ",
        "about.quote_title": "“ Vi byggede The Glass Huts til det øjeblik, hvor du ånder ud. Et sted, hvor skoven, fjorden og nattehimlen bliver det eneste, der beder om din opmærksomhed. ”",
        "about.quote_text": "Det begyndte med et enkelt ønske: at bo midt i naturen uden nogensinde at give afkald på komfort. Så vi placerede en håndfuld glashytter blidt i skoven over Mariager fjord, hvor lyset skifter hele dagen, og stjernerne kommer uforstyrret frem om natten. Hver hytte er designet til at forsvinde ind i sine omgivelser og efterlade dig med varme, ro og en udsigt, der aldrig gentager sig. Dette er vores kærlighedsbrev til det langsomme liv og til alle, der vælger at tilbringe et par ærlige dage tættere på træerne.",
        "about.gallery_title": "Menneskene, stedet <br> og roen derimellem",
        "about.gallery_text": "Vi er et lille dansk team af designere, værter og naturelskere, som passer hver hytte i hånden. Fra morgentågen over fjorden til den sidste lanterne tændt i skumringen tager vi os af detaljerne, så din eneste opgave er at hvile.",
        "about.contact_title": "Hold kontakten med os",
        "about.form_first_name": "Fornavn",
        "about.form_last_name": "Efternavn",
        "about.form_email": "E-mail",
        "about.form_subject": "Emne",
        "about.form_message": "Besked",
        "about.form_send": "Send",
        "about.with_love_title": "Fra Danmark <br> med kærlighed...",
        "faq.q_prices_title": "Priser",
        "faq.a_prices_1": "Priserne starter fra €320 pr. nat og varierer med sæsonen, den hytte du vælger og opholdets længde. Hver nat inkluderer privat adgang til din glashytte, den omkringliggende skov og den fælles wellness-sauna ved fjorden.",
        "faq.a_prices_2": "Ophold på tre nætter eller mere får en reduceret natpris, og ankomster midt på ugen er mildere for både din pengepung og din ro. Aktuelle priser for netop dine datoer vises altid i det sidste trin af bookingen.",
        "faq.a_prices_3": "Der er ingen skjulte gebyrer. Rengøring, friskt sengetøj, brænde og lokale afgifter er allerede indregnet i den pris, du ser, så det beløb, du booker, er det beløb, du betaler.",
        "faq.q_cancellation_title": "Afbestillingspolitik",
        "faq.a_cancellation_1": "Planer ændrer sig, og det forstår vi. Afbestil mindst 14 dage før din ankomst, og du får hele beløbet refunderet, uden spørgsmål.",
        "faq.a_cancellation_2": "Afbestillinger mellem 14 og 7 dage før check-in refunderes med halvtreds procent. Inden for 7 dage før ankomst kan den første nat ikke refunderes, da din hytte er reserveret udelukkende til dig.",
        "faq.a_cancellation_3": "Hvis du hellere vil flytte din pause end at afbestille den, ombooker vi gerne én gang uden gebyr, afhængigt af ledighed. Skriv blot til os, så finder vi en ny dato til dig.",
        "faq.q_walk_title": "Gåturen op til glashytten",
        "faq.a_walk_1": "Hver hytte ligger en kort spadseretur fra parkeringslysningen ad en blød skovsti på cirka 300 til 500 meter. Gåturen er en del af ankomstritualet: den lader verden falde til ro, før du når din dør.",
        "faq.a_walk_2": "Stien har en jævn stigning og oplyses ved skumringstid af lave lanterner, men solide sko er en god idé efter regn. Ved parkeringspladsen stiller vi en lille vogn til rådighed, så bagage og indkøb let kommer med på turen.",
        "faq.a_walk_3": "Hvis mobilitet er en udfordring, så sig til, når du booker. To af vores hytter ligger tættest på lysningen, og vi kan arrangere hjælp med din bagage ved ankomst og afrejse.",
        "faq.q_capacity_title": "Kapacitet",
        "faq.a_capacity_1": "Hver glashytte er indrettet til to med én rummelig kingsize-seng omkranset af skoven og himlen. Det er et intimt rum, skabt til par, nære venner eller lidt ensomhed.",
        "faq.a_capacity_2": "Udvalgte hytter kan tage imod en tredje gæst på en behagelig sovesofa, ideelt til en lille familie med ét barn. Angiv venligst den ekstra gæst ved booking, så vi kan gøre rummet og sengetøjet klar til jer.",
        "faq.a_capacity_3": "For grupper, der rejser sammen, kan flere hytter reserveres side om side, så I deler skoven, men beholder jeres eget stille hjørne. Kontakt os, så arrangerer vi de tilstødende hytter.",
        "faq.q_pets_title": "Kæledyr",
        "faq.a_pets_1": "Velopdragne hunde er hjerteligt velkomne i to af vores kæledyrsvenlige hytter. Sig blot til, når du booker, så vi kan gøre den rette hytte klar med en vandskål og et lunt tæppe til din ledsager.",
        "faq.a_pets_2": "Der pålægges et lille rengøringsgebyr på €30 pr. ophold, og vi beder om, at kæledyr ikke efterlades alene i hytten. Skovstierne omkring retreatet er perfekte til lange, afslappede gåture sammen.",
        "faq.a_pets_3": "For at beskytte roen og dyrelivet tillader vi kun hunde i retreatet og beder om, at kæledyr holdes i snor i fællesområderne. Har du spørgsmål om at rejse med dit dyr, så kontakt os endelig, inden du ankommer.",
        "faq.q_checkin_title": "Check-in / Check-ud",
        "faq.a_checkin_1": "Check-in åbner fra kl. 15:00, hvilket giver os tid til at lufte ud i hytten og lægge op til pejsen, før du ankommer. Check-ud er senest kl. 11:00, når skoven er allerfriskest til din sidste morgenkaffe.",
        "faq.a_checkin_2": "Ankomsten er kontaktløs og rolig. Nogle dage før dit ophold sender vi en personlig dørkode og et enkelt kort til din hytte, så du kan glide direkte ind i stilheden uden en reception.",
        "faq.a_checkin_3": "Ankommer du tidligt eller rejser sent? Afhængigt af dagen kan vi ofte opbevare din bagage eller forlænge din hytte mod et lille gebyr. Spørg endelig, så gør vi vores bedste for at gøre dagen uden hastværk.",
        "payment.additional_services_title": "Valgte ydelser",
        "payment.no_services": "Ingen ekstra ydelser valgt.",
        "payment.summary_hut_name": "Glashytten",
        "payment.summary_location": "Vesterbord, Danmark",
        "payment.table_check_in": "Ankomst",
        "payment.table_check_out": "Afrejse",
        "payment.table_guests": "Gæster",
        "payment.line_item_stay": "3 nætter i en glashytte",
        "payment.line_item_breakfast": "Skovmorgenmadskurv",
        "payment.line_item_wellness": "Adgang til wellness og sauna",
        "payment.line_item_discount": "Early-bird-rabat",
        "payment.total_label": "I alt",
        "forms.toast_subscribed": "Tak for din tilmelding!",
        "forms.invalid": "Udfyld venligst de markerede felter korrekt.",
        "about.toast_sent": "Tak! Vi vender tilbage til dig snarest.",
        "payment.form_title": "Dine oplysninger",
        "payment.form_first_name": "Fornavn",
        "payment.form_last_name": "Efternavn",
        "payment.form_email": "E-mail",
        "payment.form_phone": "Telefon",
        "payment.select_placeholder": "Vælg en betalingsmetode",
        "payment.method_card": "Kredit-/betalingskort",
        "payment.method_paypal": "PayPal",
        "payment.method_bank": "Bankoverførsel",
        "payment.confirm_button": "Bekræft booking",
        "payment.toast_thanks": "Tak! Vi kontakter dig snarest.",
        "terms.s1_heading": "1. Introduktion",
        "terms.s1_text": "Disse vilkår og betingelser gælder for din booking og dit ophold hos The Glass Huts, vores samling af glashytter nær Mariager Fjord i Vesterbord, Danmark. Ved at foretage en reservation eller opholde dig hos os accepterer du de vilkår, der er fastsat nedenfor.",
        "terms.s2_heading": "2. Bookinger og betaling",
        "terms.s2_text1": "En reservation er bekræftet, når vi har modtaget din bookingforespørgsel og hel eller delvis betaling som angivet under betalingen. Priserne er angivet i euro (EUR) pr. hytte pr. nat og inkluderer gældende skatter og afgifter, medmindre andet er angivet.",
        "terms.s2_text2": "Vi forbeholder os retten til at annullere en reservation, hvis betalingen ikke er gennemført inden for den tid, der er angivet ved bookingen. Eventuelle rabatkoder eller rabatter skal anvendes på bookingtidspunktet og kan ikke tilføjes med tilbagevirkende kraft.",
        "terms.s3_heading": "3. Check-in og check-ud",
        "terms.s3_text": "Check-in er fra kl. 15:00, og check-ud er senest kl. 11:00. Tidlig check-in eller sen check-ud kan aftales på forhånd med forbehold for tilgængelighed og mod et ekstra gebyr. Kontakt os venligst, hvis du forventer at ankomme uden for vores åbningstider i receptionen.",
        "terms.s4_heading": "4. Gæstens ansvar",
        "terms.s4_text": "Gæster bedes behandle hver hytte og den omkringliggende natur med omhu. Rygning er ikke tilladt inde i hytterne, og åben ild er kun tilladt i de anviste områder. Du er ansvarlig for enhver skade forårsaget under dit ophold ud over normalt slid.",
        "terms.s5_heading": "5. Ansvar",
        "terms.s5_text": "The Glass Huts er ikke ansvarlig for tab af eller skade på personlige ejendele, ej heller for personskade opstået som følge af forkert brug af faciliteterne eller manglende overholdelse af de opslåede sikkerhedsanvisninger. Vores hytter ligger i naturomgivelser, og gæster færdes på de omkringliggende stier og vandveje på eget ansvar.",
        "terms.s6_heading": "6. Gældende lov",
        "terms.s6_text": "Disse vilkår er underlagt dansk lovgivning. Enhver tvist, der opstår som følge af din booking eller dit ophold, er underlagt de danske domstoles eksklusive jurisdiktion.",
        "terms.s7_heading": "7. Kontakt",
        "terms.s7_text": "Spørgsmål om disse vilkår kan sendes til <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>. Vi hjælper dig gerne før, under og efter dit ophold.",
        "cancellation.s1_heading": "1. Oversigt",
        "cancellation.s1_text": "Vi forstår, at planer kan ændre sig. Denne politik forklarer, hvordan afbestillinger og datoændringer håndteres for ophold hos The Glass Huts. De betingelser, der gælder for din booking, vises ved betalingen og i din bekræftelsesmail.",
        "cancellation.s2_heading": "2. Gratis afbestilling",
        "cancellation.s2_text": "Afbestillinger foretaget 14 dage eller mere før din ankomstdato refunderes fuldt ud, fratrukket et eventuelt ikke-refunderbart bookinggebyr, der vises ved betalingen. For at afbestille skal du bruge linket i din bekræftelsesmail eller kontakte vores team direkte.",
        "cancellation.s3_heading": "3. Delvise refusioner",
        "cancellation.s3_text": "Afbestillinger foretaget mellem 13 og 3 dage før ankomst er berettiget til en refusion på 50 % af overnatningsprisen. Afbestillinger foretaget inden for 48 timer før ankomst er ikke-refunderbare, da hytten er reserveret udelukkende til dig.",
        "cancellation.s4_heading": "4. Udeblivelse",
        "cancellation.s4_text": "Hvis du ikke ankommer på din check-in-dato og ikke har kontaktet os, behandles reservationen som en udeblivelse, og hele beløbet opkræves. Din hytte frigives efter den første nat.",
        "cancellation.s5_heading": "5. Ændring af dine datoer",
        "cancellation.s5_text": "Du kan anmode om en datoændring op til 7 dage før ankomst, med forbehold for tilgængelighed og enhver forskel i overnatningsprisen. Vi vil altid gøre vores bedste for at finde datoer, der passer dig, frem for at annullere dit ophold.",
        "cancellation.s6_heading": "6. Behandling af refusion",
        "cancellation.s6_text": "Godkendte refusioner returneres til den oprindelige betalingsmetode inden for 5 til 10 hverdage. Afhængigt af din bank eller kortudsteder kan det tage lidt længere tid, før beløbet fremgår af din kontoudskrift.",
        "cancellation.s7_heading": "7. Kontakt",
        "cancellation.s7_text": "For at afbestille, ændre dine datoer eller spørge om en refusion kan du skrive til os på <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>, så tager vi os af resten.",
        "privacy.s1_heading": "1. Introduktion",
        "privacy.s1_text": "Denne privatlivspolitik forklarer, hvordan The Glass Huts indsamler, bruger og beskytter de personoplysninger, du deler med os, når du besøger vores hjemmeside eller foretager en booking. Vi er forpligtet til at håndtere dine data ansvarligt og gennemsigtigt.",
        "privacy.s2_heading": "2. Oplysninger, vi indsamler",
        "privacy.s2_text": "Vi indsamler de oplysninger, du angiver, når du booker, såsom dit navn, din e-mailadresse, dit telefonnummer og dine betalingsoplysninger. Vi indsamler også begrænsede tekniske data — såsom din browsertype og de besøgte sider — for at hjælpe os med at forbedre siden.",
        "privacy.s3_heading": "3. Sådan bruger vi dine oplysninger",
        "privacy.s3_text": "Dine oplysninger bruges til at bekræfte og administrere din reservation, til at kommunikere med dig om dit ophold og til at sende dig tilbud, kun når du har bedt om at modtage vores nyhedsbrev. Vi sælger ikke dine personoplysninger til nogen.",
        "privacy.s4_heading": "4. Cookies",
        "privacy.s4_text": "Vores hjemmeside bruger cookies til at huske dine præferencer — herunder dit valgte sprog — og til at forstå, hvordan besøgende bruger siden. Du kan deaktivere cookies i din browsers indstillinger, men nogle funktioner fungerer måske ikke som forventet.",
        "privacy.s5_heading": "5. Deling af data",
        "privacy.s5_text": "Vi deler kun oplysninger med betroede tjenesteudbydere, der hjælper os med driften — for eksempel betalingsformidlere og e-mailtjenester — og kun i det omfang, det er nødvendigt for at levere vores service. Disse partnere er forpligtet til at beskytte dine data.",
        "privacy.s6_heading": "6. Dine rettigheder",
        "privacy.s6_text": "Du har ret til at få adgang til, rette eller slette de personoplysninger, vi har om dig, og til at trække dit samtykke til markedsføring tilbage til enhver tid. For at udøve disse rettigheder skal du blot kontakte os.",
        "privacy.s7_heading": "7. Kontakt",
        "privacy.s7_text": "Hvis du har spørgsmål om denne privatlivspolitik eller dine data, bedes du kontakte os på <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>."
    },
    "uk": {
        "nav.home": "Головна",
        "nav.hut": "Будиночок",
        "nav.area": "Місцевість",
        "nav.booking": "Бронювання",
        "nav.about": "Про нас",
        "nav.faq": "Питання",
        "common.book_now": "Забронювати",
        "common.book_a_hut": "Забронювати будиночок",
        "common.read_more": "Докладніше",
        "common.from": "від",
        "common.per_night": "за ніч",
        "common.location": "Вестерборд, Данія",
        "footer.newsletter": "Розсилка",
        "footer.email_placeholder": "Електронна адреса",
        "footer.newsletter_text": "Підпишіться на нашу розсилку, щоб першими отримувати особливі пропозиції та знижку 10% на наступне бронювання.",
        "footer.terms": "УМОВИ ТА ПОЛОЖЕННЯ",
        "footer.cancellation": "ПОЛІТИКА СКАСУВАННЯ",
        "footer.privacy": "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ",
        "hero.title_1": "Знайдіть спокій у лісі",
        "hero.subtitle_1": "Завітайте й зупиніться в готельному будиночку <br> біля Маріагер-фіорду в Данії",
        "hero.title_2": "Знайдіть спокій на природі",
        "hero.subtitle_2": "Завітайте й зупиніться в готельному будиночку <br> у Норвегії",
        "hero.title_3": "Знайдіть спокій під зорями",
        "hero.subtitle_3": "Завітайте й зупиніться в готельному будиночку <br> в Ісландії",
        "legal.last_updated": "Останнє оновлення",
        "legal.note": "Ця сторінка є демонстраційним шаблоном і не є юридичною консультацією.",
        "terms.title": "Умови та положення",
        "cancellation.title": "Політика скасування",
        "privacy.title": "Політика конфіденційності",
        "home.cabins_title": "Хатинки",
        "home.cabins_text": "Наші скляні хатинки створені так, щоб розчинятися в ландшафті й впускати природу всередину. Вікна від підлоги до стелі обрамлюють ліс, фіорд і відкрите небо, а теплий дуб, м’яка льняна тканина та приглушене світло зберігають затишок і спокій усередині. Кожна хатинка — це приватний прихисток для двох, продуманий до дрібниць, щоб ніщо не стояло між вами й порою року, що розгортається за склом.",
        "home.forest_title": "Ліс",
        "home.forest_text": "Розташований у прадавньому лісі поблизу Маріагер-фіорду, ліс — це сама причина існування The Glass Huts. Вийдіть на світанку до пташиного співу й туману між деревами, пройдіться тихими стежками до води й повертайтеся після настання темряви під одне з найясніших, всіяних зорями небес Данії. Тут темп сповільнюється, телефон залишається в кишені, а єдиний розклад — це світло, що рухається по кронах сосен.",
        "home.facilities_title": "Зручності",
        "home.facility_mini_fridge": "Міні-холодильник",
        "home.facility_kitchenette": "Міні-кухня",
        "home.facility_coffee_machine": "Кавомашина",
        "home.facility_tea_kettle": "Електрочайник",
        "home.facility_parking": "Паркування",
        "home.facility_views": "Захопливі краєвиди",
        "home.facility_floor_heating": "Тепла підлога",
        "home.facility_shower": "Душ",
        "home.facility_flushing_toilets": "Туалет зі змивом",
        "home.facility_bedding_towels": "Постільна білизна та рушники",
        "home.more_about_us": "Більше про нас",
        "home.contact_title": "Залишайтеся на зв’язку з нами",
        "hut.hero_title": "Хатинка",
        "hut.outside_title": "Назовні ",
        "hut.outside_tab_hot_tub": "Гаряча купіль",
        "hut.outside_tab_ev_charger": "Зарядка для електромобіля",
        "hut.outside_hot_tub_text": "Вийдіть на власну терасу й зануртеся в гарячу купіль на дровах, поки ліс дихає навколо вас. Пара здіймається в прохолодне повітря фйорду, крони дерев погойдуються над головою, а після заходу сонця вода віддзеркалює небо, усипане зорями. Це наш улюблений спосіб завершити вечір у The Glass Huts.",
        "hut.outside_ev_charger_text": "Прибувайте спокійно, а вирушайте із повним зарядом. Спеціальна настінна зарядка біля хатинки за ніч повністю заряджає більшість електромобілів, тож удень ви можете блукати стежками довкола Марієгер-фйорду, а потім легко вирушити додому. Екологічна подорож вплетена в кожну частину відпочинку.",
        "hut.inside_title": "Всередині",
        "hut.inside_tab_living": "Вітальня",
        "hut.inside_tab_kitchen": "Кухня",
        "hut.inside_tab_bathroom": "Ванна кімната",
        "hut.inside_living_text": "Всередині скляні стіни від підлоги до стелі стирають межу між прихистком і лісом. Ліжко king-size звернене до дерев, натуральний дуб і тепла вовна пом’якшують кожну поверхню, а дров’яна піч наповнює простір теплим сяйвом. Із настанням ночі приглушіть світло й дозвольте стелі стати вашим вікном до зірок.",
        "hut.inside_kitchen_text": "Компактна кухня тихо продумана до дрібниць: індукційна плита, кавомашина, фільтрована вода й данський керамічний посуд — усе дбайливо розставлено. Заваріть ранкову каву й віднесіть її до скляної стіни або приготуйте неквапливу вечерю з продуктів місцевих ферм, поки світло переливається над фйордом.",
        "hut.inside_bathroom_text": "Ванна кімната — маленький прихисток із каменю й теплого дерева, із тропічним душем, підігрівом підлоги та м’якими органічними рушниками. Рослинне мило з ароматом сосни й ялівцю довершує ритуал, тож кожен ранок починається спокійно, розмірено й неквапливо.",
        "hut.practicalities_title": "Практичні деталі",
        "hut.practicalities_tab_breakfast": "Сніданок",
        "hut.practicalities_tab_dinner": "Класична вечеря",
        "hut.practicalities_breakfast_text": "Щоранку кошик зі сніданком із місцевих продуктів тихо залишають біля ваших дверей: свіжий хліб на заквасці, фермерські яйця, сезонні фрукти, данські сири та домашні варення. Смакуйте його неквапливо біля скляної стіни, поки прокидається ліс, не полишаючи спокою своєї хатинки.",
        "hut.practicalities_dinner_text": "Увечері замовте класичну вечерю з трьох страв, приготовану нашою кухнею та доставлену просто до вашої хатинки. Заснована на скандинавських інгредієнтах і ритмі пір року, вона чудово поєднується з келихом вина, потріскуванням печі та останнім світлом, що згасає над Марієгер-фйордом.",
        "area.hero_title": "Місцевість",
        "area.hero_directions": "Прокласти маршрут",
        "area.intro_title": "Вестерборд",
        "area.intro_subtitle": "Там, де ліс зустрічається з фʼйордом.",
        "area.intro_text": "Захований у тихій сільській місцевості біля фʼйорду Марʼягер, Вестерборд — це місце мʼякого світла, спокійної води й відкритого неба. Прадавній ліс переходить у порослі очеретом береги, а дні плинуть у повільному ритмі припливів. Тут немає ні натовпів, ні поспіху — лише пташиний спів на світанку, туман над луками й обрій, достатньо широкий, щоб дихати на повні груди. The Glass Huts стоять у самому серці цього краю: достатньо близько, щоб вирушити на прогулянку пішки, і достатньо далеко, щоб по-справжньому відчути себе наодинці з природою.",
        "area.map_title": "Лише коротка поїздка від Орхуса — і водночас цілий світ осторонь від усього.",
        "area.activities_title": "Активності",
        "area.slider1_title": "Ресторани та шопінг",
        "area.slider1_tab_1": "Ресторани",
        "area.slider1_tab_2": "Місцеві крамниці",
        "area.slider1_text_1": "Кухні поблизу фʼйорду готують у ритмі пір року. На вас чекає щойно виловлена риба, копчена й в’ялена за давніми традиціями, дикі трави, зібрані в лісі, та повільно тушкована місцева дичина, подана з овочами з довколишніх городів. За кілька хвилин їзди — жменька затишних ресторанів і кафе біля гавані, де наливають свіже данське пиво й вишукані натуральні вина. Попросіть нас забронювати столик, і ми підкажемо власні тихі улюблені місця.",
        "area.slider1_text_2": "Досліджуйте край без поспіху. Незалежні майстерні та студії пропонують кераміку ручної роботи, ткані вироби й скандинавський домашній декор, створені майстрами, які живуть і працюють уздовж узбережжя. Фермерські прилавки й делікатесні крамниці повняться медом, сиром, житнім хлібом і консервацією — усім, що потрібно для неквапливого сніданку у вашому будиночку. У центрах довколишніх містечок бутики та галереї лишаються за кілька кроків, тож пообіддя спокійних прогулянок ніколи не здається поспішним.",
        "area.slider2_title": "Враження на природі",
        "area.slider2_tab_1": "На воді",
        "area.slider2_tab_2": "Ліс і стежки",
        "area.slider2_text_1": "Фʼйорд Марʼягер — один із найдовших і найзатишніших у Данії, а його спокійна вода створена для неквапливих ранків. Вирушайте на світанку на каяку чи сапборді, ковзайте повз зарості очерету, де на чатах стоять чаплі, і хай плюскіт весла буде єдиним звуком. Улітку мілкі затоки достатньо теплі для купання, а екскурсії на човні відкривають тюленів, що вигріваються на піщаних косах біля гирла фʼйорду.",
        "area.slider2_text_2": "За порогом позначені стежки вʼються серед буків і сосен, повз галявини, встелені білими анемонами навесні й золоті восени. Ідіть тихо — і побачите козуль на узліссі, білок у кронах чи орлана-білохвоста, що кружляє над фʼйордом. Коли западає темрява, низький обрій і майже цілковита відсутність світлового забруднення перетворюють небо на зоряне склепіння — найкраще споглядання зірок просто за вашою скляною стіною.",
        "area.slider3_title": "Вирушайте на прогулянку авто",
        "area.slider3_tab_1": "Прибережний маршрут",
        "area.slider3_tab_2": "Одноденні поїздки",
        "area.slider3_text_1": "Одні з найкрасивіших краєвидів краю розгортаються просто крізь лобове скло. Прямуйте звивистими дорогами вздовж фʼйорду, де шлях здіймається над пагорбами полів, а тоді знову спускається до води, що виблискує поміж дерев. Зупиніться в давніх портових містечках Марʼягер і Гобро, поблукайте бруківкою вулиць повз фахверкові будинки й затримайтеся там, де вабить краєвид чи горнятко кави. Цю подорож найкраще смакувати повільно, з опущеними вікнами.",
        "area.slider3_text_2": "Вирушіть трохи далі — і день розкривається. Солоні луки й багатий пташиний світ заповідника Ліллє-Вільдмосе зовсім поруч, як і поховальні кургани доби вікінгів та овіяні вітром балтійські пляжі. Місто Орхус із художніми музеями, дизайнерськими крамницями й ресторанами біля гавані — менш ніж за годину їзди, невимушений контраст тиші будиночків. Хай який напрямок оберете, ви повернетесь до сутінків саме вчасно, щоб побачити, як світло згасає над фʼйордом.",
        "area.slider4_title": "Чарівність маленьких містечок",
        "area.slider4_tab_1": "Старе місто",
        "area.slider4_tab_2": "Культура",
        "area.slider4_text_1": "Марʼягер відомий по всій Данії як місто троянд — скупчення пастельних будиночків, витких квітів і брукованих площ, що наче спинилися десь у минулому столітті. Блукайте вуличками з крихітними майстернями й чайними, затримайтеся у дворі середньовічного абатства й дозвольте ритму містечка, де живе заледве дві тисячі душ, огорнути вас. Це саме те пообіддя, що завершується морозивом біля води.",
        "area.slider4_text_2": "За вуличками з листівок чекає жива історія, яку варто відкрити. Прокатіться старовинним паровозом, що пихкає вздовж фʼйорду влітку, завітайте до соляного центру, аби побачити, як колись видобували місцеве біле золото, або підлаштуйте візит під сільський ярмарок чи купальське вогнище. Невеликі галереї й місцеві музики тихо оживляють містечка після заходу сонця, а кожен зустрічний має час на неспішну розмову.",
        "booking.hero_title": "Бронювання",
        "booking.services_title": "Оберіть додаткові послуги",
        "booking.service_1_name": "Свіжий сніданок на одного",
        "booking.service_1_title": "Кошик сніданку на світанку",
        "booking.service_1_text": "Ранкова страва з місцевих продуктів, доставлена до дверей вашого будиночка: тепле хлібо на заквасці, данські сири, сезонні фрукти, домашня гранола та свіжозварена кава. Насолоджуйтесь нею в ліжку або на своїй приватній терасі, поки прокидається ліс.",
        "booking.service_2_name": "Вечеря з приватним шефом",
        "booking.service_2_title": "Скандинавська вечеря з трьох страв",
        "booking.service_2_text": "Наш шеф-кухар готує сезонне меню з трьох страв на основі морепродуктів із фіорду Марагер та продуктів із сусідніх ферм, яке подають у вашому будиночку при свічках. Винний супровід і вегетаріанські варіанти доступні за запитом.",
        "booking.service_3_name": "Гаряча купіль на дровах",
        "booking.service_3_title": "Приватна гаряча купіль на дровах",
        "booking.service_3_text": "Ми нагріваємо кедрову купіль поруч із вашим будиночком, щоб вона була готова в сутінках. Занурюйтесь під відкритим небом, спостерігайте, як над верхівками дерев зʼявляються зірки, і дозвольте дню розчинитися. Рушники та халати входять у вартість.",
        "booking.service_4_name": "Масаж у будиночку",
        "booking.service_4_title": "Оздоровчий масаж у будиночку",
        "booking.service_4_text": "Кваліфікований терапевт приходить до вашого будиночка на 60-хвилинний глибоко розслаблюючий масаж із органічними скандинавськими оліями. Оберіть час у день заїзду або перед вечерею та повністю розслабтеся у власному просторі.",
        "booking.service_5_name": "Прогулянка лісом із гідом",
        "booking.service_5_title": "Прогулянка лісом на світанку з гідом",
        "booking.service_5_text": "Приєднайтесь до місцевого гіда на спокійну двогодинну прогулянку лісом навколо фіорду, навчіться читати ліс, збирати сезонні дари природи та помічати диких тварин, що живуть у цьому тихому куточку Данії.",
        "booking.service_6_name": "Набір для спостереження за зірками",
        "booking.service_6_title": "Набір для спостереження за зірками та карта зоряного неба",
        "booking.service_6_text": "Далеко від міських вогнів нічне небо тут неймовірне. Ми залишаємо у вашому будиночку телескоп, теплі пледи та сезонну карту зоряного неба, щоб ви могли простежувати сузірʼя просто з ліжка крізь скляний дах.",
        "booking.rules_title": "Правила будиночка",
        "booking.rules_1": "Заїзд із 15:00, виїзд до 11:00. Повідомте нам час прибуття, і ми підготуємо ваш будиночок теплим і готовим.",
        "booking.rules_2": "The Glass Huts — тихий притулок для дорослих. Ми зберігаємо вечори спокійними, щоб кожен гість міг насолодитися тишею лісу.",
        "booking.rules_3": "Куріння всередині будиночків заборонено. Відкритий вогонь дозволений лише у відведеному вогнищі та купелі на дровах.",
        "booking.rules_4": "Будь ласка, ставтеся до будиночків та їхнього оточення дбайливо, щоб наступний гість застав той самий незайманий спокій.",
        "booking.cancellation_title": "Політика скасування",
        "booking.cancellation_1": "Скасуйте безкоштовно за 14 днів до заїзду й отримайте повне повернення оплати.",
        "booking.cancellation_2": "У разі скасування за 14–7 днів до заїзду ми утримуємо 50% вартості перебування.",
        "booking.cancellation_3": "Скасування протягом 7 днів до заїзду не підлягає поверненню, однак дати часто можна перенести за наявності місць.",
        "booking.cancellation_4": "Додаткові послуги та враження можна змінити не пізніше ніж за 48 годин до початку перебування.",
        "booking.know_title": "Корисно знати",
        "booking.know_1": "Кожен будиночок розрахований на двох гостей і має власну ванну кімнату, міні-кухню, опалення та скляний дах, створений для спостереження за зірками.",
        "booking.know_2": "Паркування розташоване за кілька хвилин ходьби вздовж вказівників від будиночків, щоб зберегти спокій і відсутність автівок. Ми допоможемо з багажем після прибуття.",
        "booking.know_3": "Wi-Fi доступний, але ми лагідно закликаємо вас відключитися і дозволити лісу задавати ритм вашого відпочинку.",
        "booking.know_4": "Маєте особливе прохання чи привід для святкування? Додайте примітку під час оформлення, і ми зробимо все можливе, щоб це влаштувати.",
        "booking.read_faq": "Читати поширені запитання",
        "booking.cart_price_per_night": "<span>3.200kr</span> / ніч",
        "booking.cart_check_in": "Заїзд",
        "booking.cart_check_out": "Виїзд",
        "booking.cart_guests": "Гості",
        "booking.summary_nights": "Ночі",
        "booking.summary_services": "Додаткові послуги",
        "booking.summary_cleaning": "Плата за прибирання",
        "booking.summary_discount": "Знижка",
        "booking.summary_guest_extra": "Додатковий гість",
        "booking.summary_total": "Разом",
        "booking.coupon_placeholder": "Промокод",
        "booking.coupon_apply": "Застосувати",
        "booking.service_add": "Додати до бронювання",
        "booking.coupon_applied": "Застосовано",
        "booking.coupon_invalid": "Недійсний код",
        "about.hero_title": "Про нас",
        "about.hero_contact_us": "Зв'язатися з нами",
        "about.hero_read_faq": "Читати FAQ",
        "about.quote_title": "“ Ми створили The Glass Huts для миті, коли ви видихаєте. Місце, де ліс, фіорд і нічне небо стають єдиним, що просить вашої уваги. ”",
        "about.quote_text": "Усе почалося з простого бажання: залишатися серед природи, ніколи не відмовляючись від комфорту. Тож ми делікатно розмістили кілька скляних будиночків у лісі над фіордом Марієгер, де світло змінюється цілий день, а вночі зорі з'являються без жодних перешкод. Кожен будиночок створений так, щоб зникати у своєму оточенні, даруючи вам тепло, тишу й краєвид, який ніколи не повторюється. Це наш лист любові до неквапливого життя і до всіх, хто обирає провести кілька щирих днів ближче до дерев.",
        "about.gallery_title": "Люди, місце <br> і тиша поміж ними",
        "about.gallery_text": "Ми — невелика данська команда дизайнерів, господарів і любителів природи, які дбають про кожен будиночок власноруч. Від ранкового туману над фіордом до останнього ліхтаря, запаленого в сутінках, ми доглядаємо за деталями, щоб вашим єдиним завданням був відпочинок.",
        "about.contact_title": "Залишайтеся на зв'язку з нами",
        "about.form_first_name": "Ім'я",
        "about.form_last_name": "Прізвище",
        "about.form_email": "Електронна пошта",
        "about.form_subject": "Тема",
        "about.form_message": "Повідомлення",
        "about.form_send": "Надіслати",
        "about.with_love_title": "З Данії <br> з любов'ю...",
        "faq.q_prices_title": "Ціни",
        "faq.a_prices_1": "Ціни починаються від €320 за ніч і залежать від сезону, обраної хатини та тривалості перебування. Кожна ніч включає приватний доступ до вашої скляної хатини, навколишнього лісу та спільної велнес-сауни біля фіорду.",
        "faq.a_prices_2": "Перебування від трьох ночей і більше отримує знижену ціну за ніч, а прибуття серед тижня дбайливіше і до вашого гаманця, і до вашого спокою. Актуальні ціни на ваші конкретні дати завжди з'являються на останньому кроці бронювання.",
        "faq.a_prices_3": "Жодних прихованих зборів. Прибирання, свіжа білизна, дрова та місцеві податки вже враховані в ціні, яку ви бачите, тож сума, яку ви бронюєте, — це сума, яку ви сплачуєте.",
        "faq.q_cancellation_title": "Політика скасування",
        "faq.a_cancellation_1": "Плани змінюються, і ми це розуміємо. Скасуйте бронювання щонайменше за 14 днів до прибуття — і ви отримаєте повне повернення коштів без зайвих запитань.",
        "faq.a_cancellation_2": "Скасування, зроблені за 14–7 днів до заїзду, повертаються у розмірі п'ятдесяти відсотків. У межах 7 днів до прибуття перша ніч не підлягає поверненню, оскільки вашу хатину зарезервовано виключно для вас.",
        "faq.a_cancellation_3": "Якщо ви радше перенесете свою відпустку, ніж скасуєте її, ми з радістю змінимо дату один раз безкоштовно, за наявності місць. Просто напишіть нам, і ми знайдемо для вас нову дату.",
        "faq.q_walk_title": "Шлях до скляної хатини",
        "faq.a_walk_1": "Кожна хатина розташована за кілька хвилин ходьби від паркувальної галявини, куди веде м'яка лісова стежка завдовжки приблизно 300–500 метрів. Ця прогулянка — частина ритуалу прибуття: вона дає світові стишитися, перш ніж ви дійдете до своїх дверей.",
        "faq.a_walk_2": "Стежка має плавний нахил і освітлюється в сутінках низькими ліхтарями, однак після дощу варто взути міцне взуття. На парковці ми надаємо невеликий візок, тож багаж і продукти легко долають цей шлях.",
        "faq.a_walk_3": "Якщо для вас важлива доступність, повідомте нас під час бронювання. Дві наші хатини розташовані найближче до галявини, і ми можемо організувати допомогу з вашим багажем під час прибуття та від'їзду.",
        "faq.q_capacity_title": "Місткість",
        "faq.a_capacity_1": "Кожна скляна хатина розрахована на двох, з одним просторим ліжком king-size в обрамленні лісу та неба. Це затишний простір, створений для пар, близьких друзів або трохи усамітнення.",
        "faq.a_capacity_2": "Окремі хатини можуть прийняти третього гостя на зручному дивані-ліжку, що ідеально для невеликої родини з однією дитиною. Будь ласка, зазначте додаткового гостя під час бронювання, щоб ми підготували кімнату та білизну для вас.",
        "faq.a_capacity_3": "Для груп, які подорожують разом, кілька хатин можна забронювати поруч, щоб ви ділили ліс, але зберігали власний тихий куточок. Зв'яжіться з нами, і ми облаштуємо сусідні хатини.",
        "faq.q_pets_title": "Домашні улюбленці",
        "faq.a_pets_1": "Вихованих собак ми щиро вітаємо у двох наших хатинах, дружніх до тварин. Просто повідомте нас під час бронювання, щоб ми підготували відповідну хатину, миску для води та затишний плед для вашого супутника.",
        "faq.a_pets_2": "Стягується невелика плата за прибирання у розмірі €30 за перебування, і ми просимо не залишати тварин наодинці в хатині. Лісові стежки навколо ретриту чудово підходять для довгих неквапливих прогулянок разом.",
        "faq.a_pets_3": "Щоб зберегти спокій і дику природу, ми приймаємо в ретриті лише собак і просимо тримати тварин на повідку в спільних зонах. Якщо у вас є запитання щодо подорожі з твариною, просто звʼяжіться з нами перед прибуттям.",
        "faq.q_checkin_title": "Заїзд / Виїзд",
        "faq.a_checkin_1": "Заїзд відкривається з 15:00, що дає нам час провітрити хатину та розпалити камін до вашого прибуття. Виїзд — до 11:00, коли ліс найсвіжіший для вашої останньої ранкової кави.",
        "faq.a_checkin_2": "Прибуття безконтактне й спокійне. За кілька днів до вашого перебування ми надсилаємо персональний код від дверей та просту мапу до вашої хатини, тож ви можете одразу зануритися в тишу без стійки реєстрації.",
        "faq.a_checkin_3": "Прибуваєте раніше чи виїжджаєте пізніше? Залежно від дня ми часто можемо зберегти ваш багаж або продовжити перебування в хатині за невелику плату. Просто запитайте, і ми зробимо все можливе, щоб день минув без поспіху.",
        "payment.additional_services_title": "Обрані послуги",
        "payment.no_services": "Додаткові послуги не обрано.",
        "payment.summary_hut_name": "Скляна хатина",
        "payment.summary_location": "Вестерборд, Данія",
        "payment.table_check_in": "Заїзд",
        "payment.table_check_out": "Виїзд",
        "payment.table_guests": "Гості",
        "payment.line_item_stay": "3 ночі у скляній хатині",
        "payment.line_item_breakfast": "Лісовий кошик на сніданок",
        "payment.line_item_wellness": "Доступ до велнесу та сауни",
        "payment.line_item_discount": "Знижка за ранє бронювання",
        "payment.total_label": "Разом",
        "forms.toast_subscribed": "Дякуємо за підписку!",
        "forms.invalid": "Будь ласка, правильно заповніть виділені поля.",
        "about.toast_sent": "Дякуємо! Ми скоро з вами зв'яжемося.",
        "payment.form_title": "Ваші дані",
        "payment.form_first_name": "Ім'я",
        "payment.form_last_name": "Прізвище",
        "payment.form_email": "Електронна пошта",
        "payment.form_phone": "Телефон",
        "payment.select_placeholder": "Оберіть спосіб оплати",
        "payment.method_card": "Кредитна / дебетова картка",
        "payment.method_paypal": "PayPal",
        "payment.method_bank": "Банківський переказ",
        "payment.confirm_button": "Підтвердити бронювання",
        "payment.toast_thanks": "Дякуємо! Ми з вами зв'яжемося найближчим часом.",
        "terms.s1_heading": "1. Вступ",
        "terms.s1_text": "Ці Умови та положення регулюють Ваше бронювання та перебування в The Glass Huts, нашій колекції скляних будиночків поблизу Маріагер-фьорду у Вестерборді, Данія. Здійснюючи бронювання або зупиняючись у нас, Ви погоджуєтеся з викладеними нижче умовами.",
        "terms.s2_heading": "2. Бронювання та оплата",
        "terms.s2_text1": "Бронювання підтверджується після того, як ми отримаємо Ваш запит на бронювання та повну або часткову оплату, як зазначено під час оформлення замовлення. Ціни вказані в євро (EUR) за будиночок за ніч і включають відповідні податки, якщо не зазначено інше.",
        "terms.s2_text2": "Ми залишаємо за собою право скасувати бронювання, якщо оплату не буде завершено протягом строку, зазначеного під час бронювання. Будь-які промокоди чи знижки мають бути застосовані під час бронювання та не можуть бути додані заднім числом.",
        "terms.s3_heading": "3. Заїзд та виїзд",
        "terms.s3_text": "Заїзд можливий з 15:00, а виїзд — до 11:00. Ранній заїзд або пізній виїзд можна організувати заздалегідь за наявності можливості та за додаткову плату. Будь ласка, зв’яжіться з нами, якщо Ви очікуєте прибути поза годинами роботи нашої стійки реєстрації.",
        "terms.s4_heading": "4. Обов’язки гостей",
        "terms.s4_text": "Ми просимо гостей дбайливо ставитися до кожного будиночка та навколишньої природи. Куріння всередині будиночків заборонено, а розведення відкритого вогню дозволено лише у відведених для цього місцях. Ви несете відповідальність за будь-які пошкодження, завдані під час Вашого перебування, що виходять за межі звичайного зносу.",
        "terms.s5_heading": "5. Відповідальність",
        "terms.s5_text": "The Glass Huts не несе відповідальності за втрату особистих речей чи їх пошкодження, а також за травми, спричинені неправильним використанням обладнання чи недотриманням розміщених вказівок з безпеки. Наші будиночки розташовані в природному середовищі, і гості виходять на навколишні стежки та водойми на власний ризик.",
        "terms.s6_heading": "6. Застосовне право",
        "terms.s6_text": "Ці Умови регулюються законодавством Данії. Будь-який спір, що виникає з Вашого бронювання чи перебування, підлягає виключній юрисдикції данських судів.",
        "terms.s7_heading": "7. Контакти",
        "terms.s7_text": "Запитання щодо цих Умов можна надіслати на <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>. Ми будемо раді допомогти до, під час та після Вашого перебування.",
        "cancellation.s1_heading": "1. Огляд",
        "cancellation.s1_text": "Ми розуміємо, що плани можуть змінюватися. Ця політика пояснює, як обробляються скасування та зміни дат для перебування в The Glass Huts. Умови, що застосовуються до Вашого бронювання, зазначені під час оформлення замовлення та у Вашому електронному листі з підтвердженням.",
        "cancellation.s2_heading": "2. Безкоштовне скасування",
        "cancellation.s2_text": "Скасування, здійснені за 14 днів або більше до дати Вашого прибуття, підлягають повному відшкодуванню за вирахуванням будь-якого невідшкодовуваного збору за бронювання, зазначеного під час оформлення замовлення. Щоб скасувати, скористайтеся посиланням у Вашому електронному листі з підтвердженням або зв’яжіться безпосередньо з нашою командою.",
        "cancellation.s3_heading": "3. Часткові відшкодування",
        "cancellation.s3_text": "Скасування, здійснені за 13–3 дні до прибуття, підлягають відшкодуванню 50% вартості проживання. Скасування, здійснені протягом 48 годин до прибуття, не підлягають відшкодуванню, оскільки будиночок зарезервовано виключно для Вас.",
        "cancellation.s4_heading": "4. Неявка",
        "cancellation.s4_text": "Якщо Ви не прибудете в дату свого заїзду та не зв’яжетеся з нами, бронювання розглядається як неявка, і стягується повна сума. Ваш будиночок буде звільнено після першої ночі.",
        "cancellation.s5_heading": "5. Зміна Ваших дат",
        "cancellation.s5_text": "Ви можете подати запит на зміну дати не пізніше ніж за 7 днів до прибуття, за наявності можливості та з урахуванням будь-якої різниці у вартості за ніч. Ми завжди докладатимемо максимум зусиль, щоб знайти дати, які Вам підходять, замість скасування Вашого перебування.",
        "cancellation.s6_heading": "6. Обробка відшкодувань",
        "cancellation.s6_text": "Схвалені відшкодування повертаються на початковий спосіб оплати протягом 5–10 робочих днів. Залежно від Вашого банку чи постачальника картки, кошти можуть відображатися у Вашій виписці трохи довше.",
        "cancellation.s7_heading": "7. Контакти",
        "cancellation.s7_text": "Щоб скасувати, змінити свої дати чи запитати про відшкодування, напишіть нам на <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>, і ми подбаємо про решту.",
        "privacy.s1_heading": "1. Вступ",
        "privacy.s1_text": "Ця Політика конфіденційності пояснює, як The Glass Huts збирає, використовує та захищає особисту інформацію, якою Ви ділитеся з нами під час відвідування нашого вебсайту чи здійснення бронювання. Ми прагнемо поводитися з Вашими даними відповідально та прозоро.",
        "privacy.s2_heading": "2. Інформація, яку ми збираємо",
        "privacy.s2_text": "Ми збираємо дані, які Ви надаєте під час бронювання, зокрема Ваше ім’я, адресу електронної пошти, номер телефону та платіжну інформацію. Ми також збираємо обмежені технічні дані — такі як тип Вашого браузера та відвідані сторінки — щоб допомогти нам покращити сайт.",
        "privacy.s3_heading": "3. Як ми використовуємо Вашу інформацію",
        "privacy.s3_text": "Ваша інформація використовується для підтвердження Вашого бронювання та управління ним, для спілкування з Вами щодо Вашого перебування, а також для надсилання Вам пропозицій лише тоді, коли Ви попросили отримувати нашу розсилку. Ми нікому не продаємо Ваші особисті дані.",
        "privacy.s4_heading": "4. Файли cookie",
        "privacy.s4_text": "Наш вебсайт використовує файли cookie, щоб запам’ятовувати Ваші налаштування — включно з обраною Вами мовою — та розуміти, як відвідувачі користуються сайтом. Ви можете вимкнути файли cookie в налаштуваннях свого браузера, однак деякі функції можуть працювати не так, як очікується.",
        "privacy.s5_heading": "5. Передавання даних",
        "privacy.s5_text": "Ми передаємо інформацію лише перевіреним постачальникам послуг, які допомагають нам працювати — наприклад, платіжним системам та поштовим сервісам — і лише в обсязі, необхідному для надання нашої послуги. Ці партнери зобов’язані захищати Ваші дані.",
        "privacy.s6_heading": "6. Ваші права",
        "privacy.s6_text": "Ви маєте право отримувати доступ до особистої інформації, яку ми зберігаємо про Вас, виправляти чи видаляти її, а також відкликати згоду на маркетинг у будь-який час. Щоб скористатися цими правами, просто зв’яжіться з нами.",
        "privacy.s7_heading": "7. Контакти",
        "privacy.s7_text": "Якщо у Вас виникли будь-які запитання щодо цієї Політики конфіденційності чи Ваших даних, будь ласка, зв’яжіться з нами за адресою <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>."
    },
    "de": {
        "nav.home": "Startseite",
        "nav.hut": "Die Hütte",
        "nav.area": "Die Umgebung",
        "nav.booking": "Buchung",
        "nav.about": "Über uns",
        "nav.faq": "FAQ",
        "common.book_now": "Jetzt buchen",
        "common.book_a_hut": "Hütte buchen",
        "common.read_more": "Mehr erfahren",
        "common.from": "ab",
        "common.per_night": "pro Nacht",
        "common.location": "Vesterbord, Dänemark",
        "footer.newsletter": "Newsletter",
        "footer.email_placeholder": "E-Mail-Adresse",
        "footer.newsletter_text": "Abonnieren Sie unseren Newsletter für besondere Angebote und erhalten Sie 10 % Rabatt auf Ihre nächste Buchung.",
        "footer.terms": "ALLGEMEINE GESCHÄFTSBEDINGUNGEN",
        "footer.cancellation": "STORNIERUNGSRICHTLINIE",
        "footer.privacy": "DATENSCHUTZRICHTLINIE",
        "hero.title_1": "Finden Sie Ruhe im Wald",
        "hero.subtitle_1": "Übernachten Sie in einer Hotelhütte nahe <br> dem Mariager Fjord in Dänemark",
        "hero.title_2": "Finden Sie Ruhe in der Natur",
        "hero.subtitle_2": "Übernachten Sie in einer Hotelhütte in <br> Norwegen",
        "hero.title_3": "Finden Sie Ruhe unter den Sternen",
        "hero.subtitle_3": "Übernachten Sie in einer Hotelhütte auf <br> Island",
        "legal.last_updated": "Zuletzt aktualisiert",
        "legal.note": "Diese Seite ist eine Beispielvorlage, die ausschließlich zu Demonstrationszwecken dient und keine Rechtsberatung darstellt.",
        "terms.title": "Allgemeine Geschäftsbedingungen",
        "cancellation.title": "Stornierungsrichtlinie",
        "privacy.title": "Datenschutzrichtlinie",
        "home.cabins_title": "Die Hütten",
        "home.cabins_text": "Unsere Glashütten sind so gebaut, dass sie mit der Landschaft verschmelzen und die Natur hereinlassen. Raumhohe Fenster rahmen den Wald, den Fjord und den offenen Himmel, während warme Eiche, weiches Leinen und gedämpftes Licht das Innere ruhig und geerdet halten. Jede Hütte ist ein privater Rückzugsort für zwei, durchdacht gestaltet, sodass nichts zwischen Ihnen und der Jahreszeit steht, die sich hinter dem Glas entfaltet.",
        "home.forest_title": "Der Wald",
        "home.forest_text": "Eingebettet in einen alten Wald nahe dem Mariager Fjord ist der Wald der Grund, warum es The Glass Huts gibt. Treten Sie im Morgengrauen hinaus zu Vogelgesang und Nebel zwischen den Bäumen, folgen Sie stillen Pfaden bis ans Wasser und kehren Sie nach Einbruch der Dunkelheit unter einen der klarsten, sternenübersäten Himmel Dänemarks zurück. Hier verlangsamt sich das Tempo, das Telefon bleibt in der Tasche, und der einzige Zeitplan ist das Licht, das über die Kiefern wandert.",
        "home.facilities_title": "Ausstattung",
        "home.facility_mini_fridge": "Minikühlschrank",
        "home.facility_kitchenette": "Küchenzeile",
        "home.facility_coffee_machine": "Kaffeemaschine",
        "home.facility_tea_kettle": "Wasserkocher",
        "home.facility_parking": "Parkplatz",
        "home.facility_views": "Atemberaubende Aussicht",
        "home.facility_floor_heating": "Fußbodenheizung",
        "home.facility_shower": "Dusche",
        "home.facility_flushing_toilets": "Spültoilette",
        "home.facility_bedding_towels": "Bettwäsche & Handtücher",
        "home.more_about_us": "Mehr über uns",
        "home.contact_title": "Bleiben Sie mit uns in Kontakt",
        "hut.hero_title": "Die Hütte",
        "hut.outside_title": "Draußen ",
        "hut.outside_tab_hot_tub": "Whirlpool",
        "hut.outside_tab_ev_charger": "E-Auto-Ladestation",
        "hut.outside_hot_tub_text": "Treten Sie auf Ihre private Terrasse und tauchen Sie in einen holzbefeuerten Whirlpool ein, während der Wald um Sie herum atmet. Dampf steigt in die kühle Fjordluft, das Blätterdach wiegt sich über Ihnen, und nach Einbruch der Dunkelheit spiegelt das Wasser einen sternenübersäten Himmel. So beenden wir am liebsten einen Abend in The Glass Huts.",
        "hut.outside_ev_charger_text": "Kommen Sie entspannt an und fahren Sie vollgeladen weiter. Eine eigene Wallbox neben der Hütte lädt die meisten Elektrofahrzeuge über Nacht vollständig auf, sodass Sie tagsüber die Wege rund um den Mariager Fjord erkunden und mühelos nach Hause fahren können. Nachhaltiges Reisen ist in jeden Teil des Aufenthalts eingebunden.",
        "hut.inside_title": "Innen",
        "hut.inside_tab_living": "Wohnbereich",
        "hut.inside_tab_kitchen": "Küche",
        "hut.inside_tab_bathroom": "Badezimmer",
        "hut.inside_living_text": "Drinnen lösen raumhohe Glaswände die Grenze zwischen Schutzraum und Wald auf. Ein Kingsize-Bett blickt auf die Bäume, natürliche Eiche und warme Wolle schmeicheln jeder Oberfläche, und ein Holzofen hält den Raum in warmem Glanz. Bei Einbruch der Nacht dimmen Sie das Licht und lassen die Decke zu Ihrem Fenster zu den Sternen werden.",
        "hut.inside_kitchen_text": "Die kompakte Küche ist auf stille Weise vollständig ausgestattet: Induktionskochfeld, Espressomaschine, gefiltertes Wasser und dänisches Steingut, alles durchdacht angeordnet. Brühen Sie Ihren Morgenkaffee und tragen Sie ihn zur Glaswand, oder bereiten Sie ein gemächliches Abendessen mit Erzeugnissen von Höfen der Umgebung zu, während sich das Licht über dem Fjord verändert.",
        "hut.inside_bathroom_text": "Das Badezimmer ist ein kleines Refugium aus Stein und warmem Holz, mit Regendusche, Fußbodenheizung und flauschigen Bio-Handtüchern. Pflanzliche Seifen mit Kiefern- und Wacholderduft vollenden das Ritual, sodass jeder Morgen ruhig, geerdet und ohne Eile beginnt.",
        "hut.practicalities_title": "Praktisches",
        "hut.practicalities_tab_breakfast": "Frühstück",
        "hut.practicalities_tab_dinner": "Klassisches Abendessen",
        "hut.practicalities_breakfast_text": "Jeden Morgen wird ein Frühstückskorb mit Produkten aus der Region leise vor Ihre Tür gestellt: frisches Sauerteigbrot, Eier vom Hof, saisonales Obst, dänische Käsesorten und hausgemachte Aufstriche. Genießen Sie ihn in aller Ruhe an der Glaswand, während der Wald erwacht, ohne die Stille Ihrer Hütte verlassen zu müssen.",
        "hut.practicalities_dinner_text": "Bestellen Sie am Abend ein klassisches Drei-Gänge-Menü, das unsere Küche zubereitet und zu Ihrer Hütte bringt. Verwurzelt in nordischen Zutaten und dem Rhythmus der Jahreszeiten, harmoniert es wunderbar mit einem Glas Wein, dem Knistern des Ofens und dem letzten Licht, das über dem Mariager Fjord verblasst.",
        "area.hero_title": "Die Umgebung",
        "area.hero_directions": "Route anzeigen",
        "area.intro_title": "Vesterbord",
        "area.intro_subtitle": "Wo der Wald auf den Fjord trifft.",
        "area.intro_text": "Eingebettet in die stille Landschaft am Mariager Fjord ist Vesterbord ein Ort aus weichem Licht, ruhigem Wasser und weitem Himmel. Uralter Wald weicht schilfgesäumten Ufern, und die Tage folgen dem langsamen Rhythmus der Gezeiten. Hier gibt es weder Menschenmengen noch Hast, nur Vogelgesang bei Sonnenaufgang, Nebel über den Wiesen und einen Horizont, der weit genug ist, um tief durchzuatmen. Die Glass Huts liegen mittendrin, nah genug, um zu Fuß hinauszuwandern, und weit genug, um sich wahrhaft allein mit der Natur zu fühlen.",
        "area.map_title": "Nur eine kurze Fahrt von Aarhus entfernt und doch eine Welt für sich.",
        "area.activities_title": "Aktivitäten",
        "area.slider1_title": "Restaurants & Einkaufen",
        "area.slider1_tab_1": "Essen",
        "area.slider1_tab_2": "Lokale Läden",
        "area.slider1_text_1": "Die Küchen am Fjord kochen mit den Jahreszeiten. Freuen Sie sich auf fangfrischen Fisch, nach alter Art geräuchert und gepökelt, auf dem Waldboden gesammelte Wildkräuter und langsam geschmortes heimisches Wild, serviert mit Gemüse aus nahegelegenen Marktgärten. Nur eine kurze Fahrt entfernt liegen einige intime Restaurants und Hafencafés, die frisches dänisches Bier und durchdachte Naturweine ausschenken. Bitten Sie uns, Ihren Tisch zu reservieren, und wir verraten Ihnen unsere eigenen stillen Favoriten.",
        "area.slider1_text_2": "Erkunden Sie die Region in aller Ruhe. Unabhängige Ateliers und Werkstätten verkaufen handgetöpferte Keramik, gewebte Textilien und skandinavische Wohnaccessoires von Handwerkern, die an der Küste leben und arbeiten. Hofläden und Feinkostgeschäfte quellen über von Honig, Käse, Roggenbrot und Eingemachtem, allem, was Sie für ein gemächliches Frühstück zurück in Ihrer Hütte brauchen. In den nahen Ortszentren liegen Boutiquen und Galerien nur einen kurzen Spaziergang entfernt, sodass sich ein Nachmittag entspannten Stöberns nie gehetzt anfühlt.",
        "area.slider2_title": "Erlebnisse in der Natur",
        "area.slider2_tab_1": "Auf dem Wasser",
        "area.slider2_tab_2": "Wald & Wege",
        "area.slider2_text_1": "Der Mariager Fjord ist einer der längsten und geschütztesten Dänemarks, sein ruhiges Wasser wie geschaffen für gemächliche Morgen. Gleiten Sie im Morgenlicht mit dem Kajak oder Stand-up-Paddleboard hinaus, treiben Sie an Schilfgürteln vorbei, wo Reiher Wache halten, und lassen Sie das Plätschern des Paddels das einzige Geräusch sein. Im Sommer sind die flachen Buchten warm genug zum Schwimmen, und geführte Bootstouren zeigen Robben, die auf den Sandbänken nahe der Fjordmündung in der Sonne liegen.",
        "area.slider2_text_2": "Vor Ihrer Tür schlängeln sich markierte Wege durch Buchen und Kiefern, vorbei an Lichtungen, die im Frühling von Buschwindröschen bedeckt sind und im Herbst golden leuchten. Gehen Sie leise, und Sie erhaschen vielleicht einen Blick auf Rehe am Waldrand, Eichhörnchen über sich oder einen Seeadler, der über dem Fjord kreist. Wenn die Dunkelheit hereinbricht, verwandeln der niedrige Horizont und das nahezu völlige Fehlen von Lichtverschmutzung den Himmel in ein Sternenzelt, die schönste Art der Sternenbeobachtung direkt vor Ihrer Glaswand.",
        "area.slider3_title": "Machen Sie eine Spazierfahrt",
        "area.slider3_tab_1": "Küstenroute",
        "area.slider3_tab_2": "Tagesausflüge",
        "area.slider3_text_1": "Einige der schönsten Landschaften der Region entfalten sich durch die Windschutzscheibe. Folgen Sie den gewundenen Straßen entlang des Fjords, wo der Weg über hügeliges Ackerland ansteigt und dann wieder hinab zum Wasser führt, das zwischen den Bäumen glänzt. Halten Sie in den alten Hafenstädten Mariager und Hobro, schlendern Sie durch ihre gepflasterten Gassen und Fachwerkhäuser und rasten Sie, wo immer eine Aussicht oder ein Kaffee lockt. Diese Fahrt genießt man am besten langsam, bei heruntergelassenen Fenstern.",
        "area.slider3_text_2": "Fahren Sie ein Stück weiter, und der Tag öffnet sich. Die Salzwiesen und die Vogelwelt des Naturschutzgebiets Lille Vildmose sind bequem erreichbar, ebenso Grabhügel aus der Wikingerzeit und windgepeitschte Ostseestrände. Die Stadt Aarhus mit ihren Kunstmuseen, Designläden und Hafenrestaurants liegt weniger als eine Stunde entfernt, ein müheloser Kontrast zur Stille der Hütten. Welche Richtung Sie auch wählen, Sie sind bei Einbruch der Dämmerung zurück, gerade rechtzeitig, um zu sehen, wie das Licht über dem Fjord verblasst.",
        "area.slider4_title": "Kleinstadtcharme",
        "area.slider4_tab_1": "Altstadt",
        "area.slider4_tab_2": "Kultur",
        "area.slider4_text_1": "Mariager ist in ganz Dänemark als die Stadt der Rosen bekannt, ein Ensemble aus pastellfarbenen Häuschen, rankenden Blüten und gepflasterten Plätzen, die irgendwo im letzten Jahrhundert innegehalten zu haben scheinen. Schlendern Sie durch Gassen voller kleiner Handwerksläden und Teestuben, verweilen Sie im Hof der mittelalterlichen Abtei und lassen Sie das Tempo eines Ortes mit kaum zweitausend Seelen auf sich wirken. Es ist die Art Nachmittag, die mit einem Eis am Wasser endet.",
        "area.slider4_text_2": "Hinter den Postkartenstraßen wartet lebendige Geschichte darauf, entdeckt zu werden. Fahren Sie mit der historischen Dampfeisenbahn, die im Sommer am Fjord entlang schnauft, betreten Sie das Salzzentrum, um zu sehen, wie das weiße Gold der Region einst gewonnen wurde, oder planen Sie Ihren Besuch zu einem Dorfmarkt oder einem Mittsommerfeuer. Kleine Galerien und lokale Musiker halten die Städte nach Einbruch der Dunkelheit still am Leben, und jeder, dem Sie begegnen, hat Zeit für ein gemächliches Gespräch.",
        "booking.hero_title": "Buchung",
        "booking.services_title": "Zusätzliche Leistungen wählen",
        "booking.service_1_name": "Frisches Frühstück für eine Person",
        "booking.service_1_title": "Frühstückskorb bei Sonnenaufgang",
        "booking.service_1_text": "Ein regionales Frühstück, direkt an Ihre Hüttentür geliefert: warmes Sauerteigbrot, dänische Käsesorten, saisonales Obst, hausgemachtes Granola und frisch gebrühter Kaffee. Genießen Sie es im Bett oder auf Ihrer privaten Terrasse, während der Wald erwacht.",
        "booking.service_2_name": "Dinner mit Privatkoch",
        "booking.service_2_title": "Nordisches Drei-Gänge-Dinner",
        "booking.service_2_text": "Unser Koch bereitet ein saisonales Drei-Gänge-Menü aus Meeresfrüchten des Mariager Fjords und Zutaten von nahegelegenen Höfen zu, das bei Kerzenschein in Ihrer Hütte serviert wird. Weinbegleitung und vegetarische Optionen auf Anfrage.",
        "booking.service_3_name": "Holzbefeuerter Badezuber",
        "booking.service_3_title": "Privater holzbefeuerter Badezuber",
        "booking.service_3_text": "Wir heizen einen Badezuber aus Zedernholz neben Ihrer Hütte, sodass er in der Dämmerung bereit ist. Entspannen Sie unter freiem Himmel, beobachten Sie, wie die Sterne über den Baumwipfeln erscheinen, und lassen Sie den Tag verklingen. Handtücher und Bademäntel sind inbegriffen.",
        "booking.service_4_name": "Massage in der Hütte",
        "booking.service_4_title": "Wellness-Massage in der Hütte",
        "booking.service_4_text": "Ein qualifizierter Therapeut kommt für eine 60-minütige Tiefenentspannungsmassage mit biologischen nordischen Ölen zu Ihrer Hütte. Wählen Sie einen Termin am Anreisetag oder vor dem Abendessen und entspannen Sie ganz in Ihrem eigenen Raum.",
        "booking.service_5_name": "Geführte Waldwanderung",
        "booking.service_5_title": "Geführte Waldwanderung bei Sonnenaufgang",
        "booking.service_5_text": "Begleiten Sie einen einheimischen Guide auf einer ruhigen zweistündigen Wanderung durch den Wald rund um den Fjord, lernen Sie, den Wald zu lesen, saisonal zu sammeln und die Tierwelt zu entdecken, die diese stille Ecke Dänemarks teilt.",
        "booking.service_6_name": "Sternbeobachtungs-Set",
        "booking.service_6_title": "Sternbeobachtungs-Set & Sternenkarte",
        "booking.service_6_text": "Fern vom Stadtlicht ist der Nachthimmel hier außergewöhnlich. Wir hinterlassen ein Teleskop, warme Decken und eine saisonale Sternenkarte in Ihrer Hütte, sodass Sie vom Bett aus durch das Glasdach die Sternbilder verfolgen können.",
        "booking.rules_title": "Hüttenregeln",
        "booking.rules_1": "Check-in ist ab 15:00 Uhr, Check-out bis 11:00 Uhr. Teilen Sie uns Ihre Ankunftszeit mit, und wir halten Ihre Hütte warm und bereit.",
        "booking.rules_2": "The Glass Huts sind ein ruhiges Refugium für Erwachsene. Wir halten die Abende friedlich, damit jeder Gast die Stille des Waldes genießen kann.",
        "booking.rules_3": "Rauchen ist in den Hütten nicht gestattet. Offenes Feuer ist nur an der vorgesehenen Feuerstelle und im holzbefeuerten Zuber erlaubt.",
        "booking.rules_4": "Bitte behandeln Sie die Hütten und ihre Umgebung behutsam, damit der nächste Gast dieselbe unberührte Ruhe vorfindet.",
        "booking.cancellation_title": "Stornierungsbedingungen",
        "booking.cancellation_1": "Stornieren Sie kostenlos bis zu 14 Tage vor Anreise und erhalten Sie Ihre Zahlung vollständig zurück.",
        "booking.cancellation_2": "Bei Stornierung zwischen 14 und 7 Tagen vor Anreise behalten wir 50 % des Gesamtaufenthalts ein.",
        "booking.cancellation_3": "Stornierungen innerhalb von 7 Tagen vor Anreise sind nicht erstattungsfähig, die Termine lassen sich jedoch je nach Verfügbarkeit oft verschieben.",
        "booking.cancellation_4": "Hinzugebuchte Leistungen und Erlebnisse können bis zu 48 Stunden vor Beginn Ihres Aufenthalts angepasst werden.",
        "booking.know_title": "Gut zu wissen",
        "booking.know_1": "Jede Hütte bietet Platz für zwei Gäste und verfügt über ein eigenes Bad, eine Kochnische, Heizung und ein Glasdach zum Sternebeobachten.",
        "booking.know_2": "Der Parkplatz liegt einen kurzen, ausgeschilderten Fußweg von den Hütten entfernt, um die Umgebung ruhig und autofrei zu halten. Bei der Ankunft helfen wir Ihnen mit dem Gepäck.",
        "booking.know_3": "WLAN ist vorhanden, doch wir laden Sie behutsam dazu ein, abzuschalten und den Wald das Tempo Ihres Aufenthalts bestimmen zu lassen.",
        "booking.know_4": "Haben Sie einen besonderen Wunsch oder Anlass im Sinn? Fügen Sie beim Bezahlen eine Notiz hinzu, und wir tun unser Bestes, um es zu ermöglichen.",
        "booking.read_faq": "FAQ lesen",
        "booking.cart_price_per_night": "<span>3.200kr</span> / Nacht",
        "booking.cart_check_in": "Anreise",
        "booking.cart_check_out": "Abreise",
        "booking.cart_guests": "Gäste",
        "booking.summary_nights": "Nächte",
        "booking.summary_services": "Zusätzliche Leistungen",
        "booking.summary_cleaning": "Reinigungsgebühr",
        "booking.summary_discount": "Rabatt",
        "booking.summary_guest_extra": "Zusätzlicher Gast",
        "booking.summary_total": "Gesamt",
        "booking.coupon_placeholder": "Gutscheincode",
        "booking.coupon_apply": "Anwenden",
        "booking.service_add": "Zur Buchung hinzufügen",
        "booking.coupon_applied": "Angewendet",
        "booking.coupon_invalid": "Ungültiger Code",
        "about.hero_title": "Über uns",
        "about.hero_contact_us": "Kontakt",
        "about.hero_read_faq": "FAQ lesen",
        "about.quote_title": "“ Wir haben The Glass Huts für den Moment gebaut, in dem du ausatmest. Ein Ort, an dem der Wald, der Fjord und der Nachthimmel das Einzige sind, was deine Aufmerksamkeit fordert. ”",
        "about.quote_text": "Es begann mit einem einfachen Wunsch: mitten in der Natur zu wohnen, ohne je auf Komfort zu verzichten. Also betteten wir eine Handvoll Glashütten behutsam in den Wald über dem Mariager Fjord, wo sich das Licht den ganzen Tag wandelt und die Sterne nachts ungestört erscheinen. Jede Hütte ist so gestaltet, dass sie in ihrer Umgebung verschwindet und dir Wärme, Ruhe und einen Ausblick schenkt, der sich nie wiederholt. Dies ist unser Liebesbrief an das langsame Leben und an alle, die sich für ein paar ehrliche Tage näher an den Bäumen entscheiden.",
        "about.gallery_title": "Die Menschen, der Ort <br> und die Stille dazwischen",
        "about.gallery_text": "Wir sind ein kleines dänisches Team aus Designern, Gastgebern und Naturliebhabern, die sich um jede Hütte von Hand kümmern. Vom Morgennebel über dem Fjord bis zur letzten in der Dämmerung entzündeten Laterne pflegen wir die Details, damit deine einzige Aufgabe das Ausruhen ist.",
        "about.contact_title": "Bleib mit uns in Kontakt",
        "about.form_first_name": "Vorname",
        "about.form_last_name": "Nachname",
        "about.form_email": "E-Mail",
        "about.form_subject": "Betreff",
        "about.form_message": "Nachricht",
        "about.form_send": "Senden",
        "about.with_love_title": "Aus Dänemark <br> mit Liebe...",
        "faq.q_prices_title": "Preise",
        "faq.a_prices_1": "Die Preise beginnen bei €320 pro Nacht und variieren je nach Saison, der gewählten Hütte und der Länge Ihres Aufenthalts. Jede Nacht umfasst den privaten Zugang zu Ihrer Glashütte, dem umliegenden Wald und der gemeinsamen Wellness-Sauna am Fjord.",
        "faq.a_prices_2": "Aufenthalte von drei Nächten oder mehr erhalten einen reduzierten Nächtigungspreis, und Anreisen unter der Woche schonen sowohl Ihren Geldbeutel als auch Ihre Ruhe. Die aktuellen Preise für Ihre genauen Daten erscheinen stets im letzten Schritt der Buchung.",
        "faq.a_prices_3": "Es gibt keine versteckten Gebühren. Reinigung, frische Bettwäsche, Brennholz und lokale Abgaben sind bereits im angezeigten Preis enthalten, sodass der gebuchte Betrag dem entspricht, den Sie zahlen.",
        "faq.q_cancellation_title": "Stornierungsbedingungen",
        "faq.a_cancellation_1": "Pläne ändern sich, und wir verstehen das. Stornieren Sie mindestens 14 Tage vor Ihrer Anreise, und Sie erhalten eine vollständige Rückerstattung, ganz ohne Nachfragen.",
        "faq.a_cancellation_2": "Stornierungen zwischen 14 und 7 Tagen vor dem Check-in werden zu fünfzig Prozent erstattet. Innerhalb von 7 Tagen vor der Anreise ist die erste Nacht nicht erstattungsfähig, da Ihre Hütte exklusiv für Sie reserviert wird.",
        "faq.a_cancellation_3": "Wenn Sie Ihre Auszeit lieber verschieben als stornieren möchten, buchen wir gerne einmalig kostenfrei um, je nach Verfügbarkeit. Schreiben Sie uns einfach, und wir finden einen neuen Termin für Sie.",
        "faq.q_walk_title": "Der Weg zur Glashütte",
        "faq.a_walk_1": "Jede Hütte liegt einen kurzen Spaziergang von der Parklichtung entfernt, erreichbar über einen weichen Waldpfad von etwa 300 bis 500 Metern. Der Weg ist Teil des Ankunftsrituals: Er lässt die Welt zur Ruhe kommen, bevor Sie Ihre Tür erreichen.",
        "faq.a_walk_2": "Der Pfad steigt sanft an und wird in der Dämmerung von niedrigen Laternen beleuchtet, doch nach Regen sind feste Schuhe ratsam. Am Parkplatz stellen wir einen kleinen Wagen bereit, damit Gepäck und Einkäufe den Weg mühelos zurücklegen.",
        "faq.a_walk_3": "Wenn Mobilität ein Thema ist, sagen Sie uns bei der Buchung Bescheid. Zwei unserer Hütten liegen der Lichtung am nächsten, und wir können bei An- und Abreise Hilfe mit Ihrem Gepäck organisieren.",
        "faq.q_capacity_title": "Belegung",
        "faq.a_capacity_1": "Jede Glashütte ist für zwei ausgelegt, mit einem großzügigen Kingsize-Bett, umrahmt von Wald und Himmel. Es ist ein intimer Raum, gemacht für Paare, enge Freunde oder ein wenig Einsamkeit.",
        "faq.a_capacity_2": "Ausgewählte Hütten können einen dritten Gast auf einem bequemen Schlafsofa aufnehmen, ideal für eine kleine Familie mit einem Kind. Bitte geben Sie den zusätzlichen Gast bei der Buchung an, damit wir Zimmer und Bettwäsche für Sie vorbereiten können.",
        "faq.a_capacity_3": "Für gemeinsam reisende Gruppen können mehrere Hütten nebeneinander reserviert werden, sodass Sie den Wald teilen und dennoch Ihre eigene ruhige Ecke behalten. Kontaktieren Sie uns, und wir richten die benachbarten Hütten für Sie ein.",
        "faq.q_pets_title": "Haustiere",
        "faq.a_pets_1": "Gut erzogene Hunde sind in zwei unserer haustierfreundlichen Hütten herzlich willkommen. Sagen Sie uns einfach bei der Buchung Bescheid, damit wir die passende Hütte, einen Wassernapf und eine kuschelige Decke für Ihren Begleiter vorbereiten können.",
        "faq.a_pets_2": "Es fällt eine kleine Reinigungsgebühr von €30 pro Aufenthalt an, und wir bitten darum, Haustiere nicht allein in der Hütte zu lassen. Die Waldwege rund um das Retreat eignen sich perfekt für lange, gemächliche Spaziergänge zu zweit.",
        "faq.a_pets_3": "Um die Ruhe und die Tierwelt zu schützen, erlauben wir im Retreat ausschließlich Hunde und bitten darum, Haustiere in Gemeinschaftsbereichen an der Leine zu führen. Bei Fragen zur Reise mit Ihrem Tier melden Sie sich einfach vor Ihrer Ankunft.",
        "faq.q_checkin_title": "Check-in / Check-out",
        "faq.a_checkin_1": "Der Check-in ist ab 15:00 Uhr möglich, sodass wir Zeit haben, die Hütte zu lüften und das Feuer vorzubereiten, bevor Sie ankommen. Der Check-out ist bis 11:00 Uhr, wenn der Wald für Ihren letzten Morgenkaffee am frischesten ist.",
        "faq.a_checkin_2": "Die Ankunft ist kontaktlos und ruhig. Einige Tage vor Ihrem Aufenthalt senden wir Ihnen einen persönlichen Türcode und eine einfache Karte zu Ihrer Hütte, sodass Sie ohne Rezeption direkt in die Stille eintauchen können.",
        "faq.a_checkin_3": "Reisen Sie früher an oder später ab? Je nach Tag können wir oft Ihr Gepäck aufbewahren oder Ihre Hütte gegen eine kleine Gebühr verlängern. Fragen Sie einfach, und wir tun unser Bestes, damit der Tag ohne Eile verläuft.",
        "payment.additional_services_title": "Ausgewählte Leistungen",
        "payment.no_services": "Keine zusätzlichen Leistungen ausgewählt.",
        "payment.summary_hut_name": "Die Glashütte",
        "payment.summary_location": "Vesterbord, Dänemark",
        "payment.table_check_in": "Anreise",
        "payment.table_check_out": "Abreise",
        "payment.table_guests": "Gäste",
        "payment.line_item_stay": "3 Nächte in einer Glashütte",
        "payment.line_item_breakfast": "Waldfrühstückskorb",
        "payment.line_item_wellness": "Wellness- & Saunazugang",
        "payment.line_item_discount": "Frühbucherrabatt",
        "payment.total_label": "Gesamt",
        "forms.toast_subscribed": "Danke für deine Anmeldung!",
        "forms.invalid": "Bitte füllen Sie die markierten Felder korrekt aus.",
        "about.toast_sent": "Danke! Wir melden uns bald bei Ihnen.",
        "payment.form_title": "Ihre Daten",
        "payment.form_first_name": "Vorname",
        "payment.form_last_name": "Nachname",
        "payment.form_email": "E-Mail",
        "payment.form_phone": "Telefon",
        "payment.select_placeholder": "Zahlungsmethode wählen",
        "payment.method_card": "Kredit-/Debitkarte",
        "payment.method_paypal": "PayPal",
        "payment.method_bank": "Banküberweisung",
        "payment.confirm_button": "Buchung bestätigen",
        "payment.toast_thanks": "Danke! Wir kontaktieren Sie in Kürze.",
        "terms.s1_heading": "1. Einführung",
        "terms.s1_text": "Diese Allgemeinen Geschäftsbedingungen regeln Ihre Buchung und Ihren Aufenthalt bei The Glass Huts, unserer Sammlung von Glashütten in der Nähe des Mariager Fjords in Vesterbord, Dänemark. Mit der Vornahme einer Reservierung oder Ihrem Aufenthalt bei uns erklären Sie sich mit den nachstehend aufgeführten Bedingungen einverstanden.",
        "terms.s2_heading": "2. Buchungen und Zahlung",
        "terms.s2_text1": "Eine Reservierung ist bestätigt, sobald wir Ihre Buchungsanfrage und die vollständige oder teilweise Zahlung gemäß den Angaben während des Bezahlvorgangs erhalten haben. Die Preise werden in Euro (EUR) pro Hütte und pro Nacht angegeben und beinhalten, sofern nicht anders angegeben, die anfallenden Steuern.",
        "terms.s2_text2": "Wir behalten uns das Recht vor, eine Reservierung zu stornieren, wenn die Zahlung nicht innerhalb der bei der Buchung angegebenen Frist abgeschlossen wird. Etwaige Aktionscodes oder Rabatte müssen zum Zeitpunkt der Buchung angewendet werden und können nicht nachträglich hinzugefügt werden.",
        "terms.s3_heading": "3. Check-in und Check-out",
        "terms.s3_text": "Der Check-in ist ab 15:00 Uhr und der Check-out bis 11:00 Uhr möglich. Ein früherer Check-in oder späterer Check-out kann im Voraus vereinbart werden, vorbehaltlich der Verfügbarkeit und gegen eine zusätzliche Gebühr. Bitte kontaktieren Sie uns, wenn Sie voraussichtlich außerhalb unserer Rezeptionszeiten ankommen.",
        "terms.s4_heading": "4. Verantwortlichkeiten der Gäste",
        "terms.s4_text": "Wir bitten die Gäste, jede Hütte und die umgebende Natur mit Sorgfalt zu behandeln. Das Rauchen ist im Inneren der Hütten nicht gestattet, und offene Feuer sind nur in den dafür vorgesehenen Bereichen erlaubt. Sie sind für jeden während Ihres Aufenthalts verursachten Schaden verantwortlich, der über die normale Abnutzung hinausgeht.",
        "terms.s5_heading": "5. Haftung",
        "terms.s5_text": "The Glass Huts haftet nicht für Verlust oder Beschädigung persönlicher Gegenstände und ebenso wenig für Verletzungen, die aus dem Missbrauch der Einrichtungen oder der Nichtbeachtung der ausgehängten Sicherheitshinweise entstehen. Unsere Hütten befinden sich in einer natürlichen Umgebung, und Gäste betreten die umliegenden Wege und Wasserwege auf eigene Gefahr.",
        "terms.s6_heading": "6. Anwendbares Recht",
        "terms.s6_text": "Diese Bedingungen unterliegen dem Recht Dänemarks. Jede Streitigkeit, die sich aus Ihrer Buchung oder Ihrem Aufenthalt ergibt, unterliegt der ausschließlichen Zuständigkeit der dänischen Gerichte.",
        "terms.s7_heading": "7. Kontakt",
        "terms.s7_text": "Fragen zu diesen Bedingungen können an <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a> gesendet werden. Wir helfen Ihnen gerne vor, während und nach Ihrem Aufenthalt.",
        "cancellation.s1_heading": "1. Überblick",
        "cancellation.s1_text": "Wir verstehen, dass sich Pläne ändern können. Diese Richtlinie erläutert, wie Stornierungen und Datumsänderungen für Aufenthalte bei The Glass Huts gehandhabt werden. Die für Ihre Buchung geltenden Bedingungen werden beim Bezahlvorgang und in Ihrer Bestätigungs-E-Mail angezeigt.",
        "cancellation.s2_heading": "2. Kostenlose Stornierung",
        "cancellation.s2_text": "Stornierungen, die 14 Tage oder mehr vor Ihrem Anreisedatum vorgenommen werden, sind vollständig erstattungsfähig, abzüglich etwaiger nicht erstattungsfähiger Buchungsgebühren, die beim Bezahlvorgang angezeigt werden. Um zu stornieren, verwenden Sie den Link in Ihrer Bestätigungs-E-Mail oder kontaktieren Sie unser Team direkt.",
        "cancellation.s3_heading": "3. Teilweise Erstattungen",
        "cancellation.s3_text": "Stornierungen, die zwischen 13 und 3 Tagen vor der Anreise vorgenommen werden, sind für eine Erstattung von 50 % der Unterkunftskosten berechtigt. Stornierungen, die innerhalb von 48 Stunden vor der Anreise vorgenommen werden, sind nicht erstattungsfähig, da die Hütte ausschließlich für Sie reserviert ist.",
        "cancellation.s4_heading": "4. Nichterscheinen",
        "cancellation.s4_text": "Wenn Sie an Ihrem Check-in-Datum nicht anreisen und uns nicht kontaktiert haben, wird die Reservierung als Nichterscheinen behandelt und der volle Betrag wird berechnet. Ihre Hütte wird nach der ersten Nacht freigegeben.",
        "cancellation.s5_heading": "5. Änderung Ihrer Daten",
        "cancellation.s5_text": "Sie können bis zu 7 Tage vor der Anreise eine Datumsänderung beantragen, vorbehaltlich der Verfügbarkeit und einer etwaigen Differenz beim Übernachtungspreis. Wir werden stets unser Bestes tun, um Daten zu finden, die Ihnen passen, anstatt Ihren Aufenthalt zu stornieren.",
        "cancellation.s6_heading": "6. Erstattungsabwicklung",
        "cancellation.s6_text": "Genehmigte Erstattungen werden innerhalb von 5 bis 10 Werktagen auf die ursprüngliche Zahlungsmethode zurückerstattet. Je nach Ihrer Bank oder Ihrem Kartenanbieter kann es etwas länger dauern, bis die Beträge auf Ihrer Abrechnung erscheinen.",
        "cancellation.s7_heading": "7. Kontakt",
        "cancellation.s7_text": "Um zu stornieren, Ihre Daten zu ändern oder eine Erstattung zu erfragen, schreiben Sie uns eine E-Mail an <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a> und wir kümmern uns um den Rest.",
        "privacy.s1_heading": "1. Einführung",
        "privacy.s1_text": "Diese Datenschutzrichtlinie erläutert, wie The Glass Huts die personenbezogenen Informationen erhebt, verwendet und schützt, die Sie mit uns teilen, wenn Sie unsere Website besuchen oder eine Buchung vornehmen. Wir verpflichten uns, Ihre Daten verantwortungsvoll und transparent zu handhaben.",
        "privacy.s2_heading": "2. Informationen, die wir erheben",
        "privacy.s2_text": "Wir erheben die Angaben, die Sie bei der Buchung machen, wie zum Beispiel Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer und Ihre Zahlungsinformationen. Wir erheben außerdem begrenzte technische Daten – wie Ihren Browsertyp und die besuchten Seiten –, um uns zu helfen, die Website zu verbessern.",
        "privacy.s3_heading": "3. Wie wir Ihre Informationen verwenden",
        "privacy.s3_text": "Ihre Informationen werden verwendet, um Ihre Reservierung zu bestätigen und zu verwalten, um mit Ihnen über Ihren Aufenthalt zu kommunizieren und um Ihnen Angebote nur dann zu senden, wenn Sie darum gebeten haben, unseren Newsletter zu erhalten. Wir verkaufen Ihre personenbezogenen Daten an niemanden.",
        "privacy.s4_heading": "4. Cookies",
        "privacy.s4_text": "Unsere Website verwendet Cookies, um sich Ihre Präferenzen – einschließlich Ihrer gewählten Sprache – zu merken und um zu verstehen, wie Besucher die Website nutzen. Sie können Cookies in Ihren Browsereinstellungen deaktivieren, wobei einige Funktionen möglicherweise nicht wie erwartet funktionieren.",
        "privacy.s5_heading": "5. Datenweitergabe",
        "privacy.s5_text": "Wir geben Informationen nur an vertrauenswürdige Dienstleister weiter, die uns beim Betrieb unterstützen – zum Beispiel Zahlungsdienstleister und E-Mail-Dienste –, und nur in dem Umfang, der zur Erbringung unserer Dienstleistung erforderlich ist. Diese Partner sind verpflichtet, Ihre Daten zu schützen.",
        "privacy.s6_heading": "6. Ihre Rechte",
        "privacy.s6_text": "Sie haben das Recht, auf die personenbezogenen Informationen, die wir über Sie gespeichert haben, zuzugreifen, sie zu berichtigen oder zu löschen, sowie Ihre Einwilligung zum Marketing jederzeit zu widerrufen. Um diese Rechte auszuüben, nehmen Sie einfach Kontakt mit uns auf.",
        "privacy.s7_heading": "7. Kontakt",
        "privacy.s7_text": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder zu Ihren Daten haben, kontaktieren Sie uns bitte unter <a href=\"mailto:info@theglasshuts.com\">info@theglasshuts.com</a>."
    }
};


// ------- i18n (перемикання мов) + актуальний рік у футері -------
// Словник перекладів лежить у window.THG_I18N (файл _i18n_translations.js),
// який підключається ПЕРЕД цим файлом у main_script.js.
"use strict";
(function () {
    var DEFAULT_LANG = "en";
    var SUPPORTED = ["en", "da", "uk", "de"];
    var STORAGE_KEY = "thg_lang";
    var dict = window.THG_I18N || {};

    function getSavedLang() {
        var saved = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch (e) { /* localStorage недоступний */ }
        if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
        var htmlLang = (document.documentElement.getAttribute("lang") || "").slice(0, 2);
        if (SUPPORTED.indexOf(htmlLang) !== -1) return htmlLang;
        return DEFAULT_LANG;
    }

    // Повертає переклад ключа з фолбеком: поточна мова -> англійська -> null
    function translate(key, lang) {
        if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
        if (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key] != null) return dict[DEFAULT_LANG][key];
        return null; // ключа немає ніде — лишаємо наявний текст у розмітці
    }

    function each(selector, fn) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
    }

    function applyLang(lang) {
        document.documentElement.setAttribute("lang", lang);

        each("[data-i18n]", function (el) {
            var v = translate(el.getAttribute("data-i18n"), lang);
            if (v != null) el.textContent = v;
        });
        each("[data-i18n-html]", function (el) {
            var v = translate(el.getAttribute("data-i18n-html"), lang);
            if (v != null) el.innerHTML = v;
        });
        each("[data-i18n-ph]", function (el) {
            var v = translate(el.getAttribute("data-i18n-ph"), lang);
            if (v != null) el.setAttribute("placeholder", v);
        });

        updateSwitcher(lang);
    }

    // Оновлює вигляд перемикача: активний пункт + поточний прапор/код
    function updateSwitcher(lang) {
        var activeOption = null;
        each("[data-lang-option]", function (el) {
            var isActive = el.getAttribute("data-lang-option") === lang;
            el.classList.toggle("_active", isActive);
            if (isActive) activeOption = el;
        });

        var current = document.querySelector("[data-lang-current]");
        if (current && activeOption) {
            var label = current.querySelector("[data-lang-current-label]");
            var flag = current.querySelector("[data-lang-current-flag]");
            if (label) label.textContent = activeOption.getAttribute("data-lang-label") || lang.toUpperCase();
            if (flag) {
                var img = activeOption.querySelector("img");
                if (img) {
                    var src = img.getAttribute("src");
                    flag.setAttribute("src", src);
                    flag.setAttribute("alt", img.getAttribute("alt") || lang);
                    // Збірка (gulp-webp-html) обгортає <img> у <picture> з <source srcset>,
                    // якому браузер віддає перевагу над <img src>. Тож оновлюємо і <source>,
                    // інакше прапор лишається старим, попри зміну src у <img>.
                    var picture = flag.parentNode;
                    if (picture && picture.tagName === "PICTURE") {
                        var sources = picture.getElementsByTagName("source");
                        for (var s = 0; s < sources.length; s++) {
                            sources[s].setAttribute("srcset", src);
                        }
                    }
                }
            }
        }
    }

    function setLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* ignore */ }
        applyLang(lang);
    }

    // Актуальний рік у знаку копірайту (<span data-year>)
    function updateYear() {
        var year = String(new Date().getFullYear());
        each("[data-year]", function (el) {
            el.textContent = year;
        });
    }

    function init() {
        each("[data-lang-option]", function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                setLang(el.getAttribute("data-lang-option"));
            });
        });
        updateYear();
        applyLang(getSavedLang());
    }

    // Публічний доступ (напр. з консолі): THG.setLang('uk')
    window.THG = window.THG || {};
    window.THG.setLang = setLang;
    // Переклад ключа для поточної мови (для динамічного тексту з JS)
    window.THG.t = function (key) {
        return translate(key, document.documentElement.getAttribute("lang") || DEFAULT_LANG);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();


// Перевірка на тип пристрою
"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuButton = document.querySelector('.menu__button-mobile');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuButton.classList.toggle('_active');
    });
}

// Прокрутка при кліку
const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            /*Якщо натиснемо на пункт меню воно закриється*/
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                menuButton.classList.remove('_active');

            }
            //Для плавної прокрутки
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// ------- Калькулятор бронювання (booking.html) -------
// Рахує ночі за датами, доплату за 2-го гостя, обрані послуги, знижку за
// промокодом і підсумок. Формат ціни — данський (3.200kr). Стан зберігається
// в localStorage (thg_booking), щоб сторінка оплати підхопила його.
"use strict";
(function () {
    var root = document.querySelector("[data-booking]");
    if (!root) return; // виконуємо лише на сторінці бронювання

    var PRICE_NIGHT = parseInt(root.getAttribute("data-price-night"), 10) || 0;
    var GUEST_FEE = parseInt(root.getAttribute("data-guest-fee"), 10) || 0; // доплата за кожного додаткового гостя/ніч
    var CLEANING = parseInt(root.getAttribute("data-cleaning"), 10) || 0;
    var MIN_GUESTS = 1, MAX_GUESTS = 2; // будиночок розрахований на двох

    // Демо-промокоди: pct — відсоток, fixed — фіксована сума (kr)
    var COUPONS = {
        "GLASS10": { type: "pct", value: 10 },
        "FOREST20": { type: "pct", value: 20 },
        "WELCOME500": { type: "fixed", value: 500 }
    };

    var checkin = root.querySelector("[data-checkin]");
    var checkout = root.querySelector("[data-checkout]");
    var guestCount = root.querySelector("[data-guest-count]");
    var guestDec = root.querySelector("[data-guest-dec]");
    var guestInc = root.querySelector("[data-guest-inc]");
    var couponInput = root.querySelector("[data-coupon-input]");
    var couponApply = root.querySelector("[data-coupon-apply]");
    var couponMsg = root.querySelector("[data-coupon-msg]");
    // Чекбокси послуг лежать у лівій колонці, поза .trash
    var serviceChecks = document.querySelectorAll("[data-service]");

    var out = {
        nights: root.querySelector("[data-sum-nights]"),
        guest: root.querySelector("[data-sum-guest]"),
        guestRow: root.querySelector("[data-sum-guest-row]"),
        services: root.querySelector("[data-sum-services]"),
        cleaning: root.querySelector("[data-sum-cleaning]"),
        discount: root.querySelector("[data-sum-discount]"),
        total: root.querySelector("[data-sum-total]")
    };

    var guests = MIN_GUESTS;
    var coupon = null;     // застосований об'єкт промокоду
    var couponCode = "";   // код застосованого промокоду

    // ---- утиліти ----
    function fmt(n) {
        n = Math.max(0, Math.round(n));
        // тисячний роздільник "." (данський формат): 3200 -> 3.200
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "kr";
    }
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
    function parseDate(v) {
        if (!v) return null;
        var d = new Date(v + "T00:00:00");
        return isNaN(d.getTime()) ? null : d;
    }
    function nightsBetween() {
        var a = parseDate(checkin && checkin.value);
        var b = parseDate(checkout && checkout.value);
        if (!a || !b) return 0;
        var diff = Math.floor((b - a) / 86400000);
        return diff > 0 ? diff : 0;
    }
    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }

    // Перелік обраних послуг: {key, name, titleKey, title, textKey, text, price}
    // — щоб сторінка оплати показала їх поіменно з описом і перекладала за i18n.
    function selectedServices() {
        var items = [];
        for (var i = 0; i < serviceChecks.length; i++) {
            if (!serviceChecks[i].checked) continue;
            var price = parseInt(serviceChecks[i].getAttribute("data-price"), 10) || 0;
            var itemEl = serviceChecks[i].closest(".choose-services__spoiler-item");
            var nameEl = itemEl && itemEl.querySelector(".choose-services__spoiler-title-text [data-i18n]");
            var titleEl = itemEl && itemEl.querySelector(".choose-services__spoiler-title");
            var textEl = itemEl && itemEl.querySelector(".choose-services__spoiler-text");
            items.push({
                key: nameEl ? nameEl.getAttribute("data-i18n") : "",
                name: nameEl ? nameEl.textContent.trim() : "",
                titleKey: titleEl ? titleEl.getAttribute("data-i18n") : "",
                title: titleEl ? titleEl.textContent.trim() : "",
                textKey: textEl ? textEl.getAttribute("data-i18n") : "",
                text: textEl ? textEl.textContent.trim() : "",
                price: price
            });
        }
        return items;
    }

    // ---- головний перерахунок ----
    function recalc() {
        var nights = nightsBetween();
        var accommodation = nights * PRICE_NIGHT;
        var guestExtra = nights * GUEST_FEE * (guests - 1); // доплата за додаткових гостей
        var serviceItems = selectedServices();
        var services = 0;
        for (var si = 0; si < serviceItems.length; si++) services += serviceItems[si].price;
        var cleaning = nights > 0 ? CLEANING : 0;
        var subtotal = accommodation + guestExtra + services + cleaning;

        var discount = 0;
        if (coupon) {
            discount = coupon.type === "pct" ? subtotal * coupon.value / 100 : coupon.value;
            discount = Math.min(discount, subtotal);
        }
        var total = Math.max(0, subtotal - discount);

        if (out.nights) out.nights.textContent = fmt(accommodation);
        if (out.guest) out.guest.textContent = fmt(guestExtra);
        if (out.guestRow) out.guestRow.hidden = guestExtra <= 0; // рядок лише коли є доплата
        if (out.services) out.services.textContent = fmt(services);
        if (out.cleaning) out.cleaning.textContent = fmt(cleaning);
        if (out.discount) out.discount.textContent = (discount > 0 ? "-" : "") + fmt(discount);
        if (out.total) out.total.textContent = fmt(total);

        try {
            localStorage.setItem("thg_booking", JSON.stringify({
                checkin: checkin ? checkin.value : "",
                checkout: checkout ? checkout.value : "",
                nights: nights, guests: guests,
                priceNight: PRICE_NIGHT, guestFee: GUEST_FEE, guestExtra: guestExtra,
                accommodation: accommodation, services: services, serviceItems: serviceItems,
                cleaning: cleaning, discount: Math.round(discount),
                total: total, coupon: couponCode
            }));
        } catch (e) { /* localStorage недоступний */ }
    }

    // ---- гості ----
    function setGuests(v) {
        guests = Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, v));
        if (guestCount) guestCount.textContent = String(guests);
        if (guestDec) guestDec.disabled = guests <= MIN_GUESTS;
        if (guestInc) guestInc.disabled = guests >= MAX_GUESTS;
        recalc();
    }
    if (guestDec) guestDec.addEventListener("click", function () { setGuests(guests - 1); });
    if (guestInc) guestInc.addEventListener("click", function () { setGuests(guests + 1); });

    // ---- дати ----
    function syncCheckoutMin() {
        var a = parseDate(checkin && checkin.value);
        if (a && checkout) {
            var min = new Date(a); min.setDate(min.getDate() + 1);
            checkout.min = iso(min);
            var b = parseDate(checkout.value);
            if (b && b <= a) checkout.value = iso(min);
        }
    }
    function initDates() {
        var today = new Date();
        var t2 = new Date(); t2.setDate(t2.getDate() + 2);
        if (checkin) {
            checkin.min = iso(today);
            if (!checkin.value) checkin.value = iso(today);
        }
        if (checkout && !checkout.value) checkout.value = iso(t2);
        syncCheckoutMin();
    }
    if (checkin) checkin.addEventListener("change", function () { syncCheckoutMin(); recalc(); });
    if (checkout) checkout.addEventListener("change", recalc);

    // ---- послуги ----
    for (var i = 0; i < serviceChecks.length; i++) {
        serviceChecks[i].addEventListener("change", recalc);
    }

    // ---- промокод ----
    function showMsg(key, ok) {
        if (!couponMsg) return;
        couponMsg.setAttribute("data-i18n", key); // оновлюється при зміні мови
        couponMsg.textContent = t(key, key);
        couponMsg.hidden = false;
        couponMsg.classList.toggle("_ok", !!ok);
        couponMsg.classList.toggle("_err", !ok);
    }
    function applyCoupon(e) {
        if (e) e.preventDefault();
        var code = (couponInput && couponInput.value || "").trim().toUpperCase();
        if (COUPONS[code]) {
            coupon = COUPONS[code];
            couponCode = code;
            showMsg("booking.coupon_applied", true);
        } else {
            coupon = null;
            couponCode = "";
            showMsg("booking.coupon_invalid", false);
        }
        recalc();
    }
    if (couponApply) couponApply.addEventListener("click", applyCoupon);
    if (couponInput) couponInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") applyCoupon(e);
    });

    // ---- ініціалізація ----
    initDates();
    setGuests(guests);
    recalc();
})();


// ------- Підсумок оплати (payment.html) -------
// Читає збережене бронювання (localStorage: thg_booking від _booking_calc.js)
// і заповнює: кошик (дати, гості, рядки, підсумок) та лівий блок із переліком
// обраних послуг. Немає збереження — лишаємо типову розмітку сторінки.
"use strict";
(function () {
    var root = document.querySelector("[data-payment]");
    if (!root) return;

    var data = null;
    try { data = JSON.parse(localStorage.getItem("thg_booking") || "null"); } catch (e) { /* ignore */ }
    if (!data) return; // прямий візит без бронювання — показуємо дефолт

    function fmt(n) {
        n = Math.max(0, Math.round(n || 0));
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "kr";
    }
    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }
    function fmtDate(iso) {
        var d = iso ? new Date(iso + "T00:00:00") : null;
        if (!d || isNaN(d.getTime())) return "—";
        return d.toLocaleDateString(); // формат за локаллю браузера
    }

    // ---- правий кошик ----
    var elCheckin = root.querySelector("[data-pay-checkin]");
    var elCheckout = root.querySelector("[data-pay-checkout]");
    var elGuests = root.querySelector("[data-pay-guests]");
    var elLines = root.querySelector("[data-pay-lines]");
    var elTotal = root.querySelector("[data-pay-total]");

    if (elCheckin) elCheckin.textContent = fmtDate(data.checkin);
    if (elCheckout) elCheckout.textContent = fmtDate(data.checkout);
    if (elGuests) elGuests.textContent = String(data.guests || 1);
    if (elTotal) elTotal.textContent = fmt(data.total);

    function addLine(parent, labelText, valueText, opts) {
        opts = opts || {};
        var row = document.createElement("div");
        row.className = "trash__block-info" + (opts.discount ? " trash__discount" : "");
        var l = document.createElement("p");
        if (opts.i18nKey) l.setAttribute("data-i18n", opts.i18nKey); // оновиться при зміні мови
        l.textContent = labelText;
        var v = document.createElement("p");
        v.textContent = valueText;
        row.appendChild(l);
        row.appendChild(v);
        parent.appendChild(row);
    }

    if (elLines) {
        elLines.innerHTML = "";
        var nights = data.nights || 0;
        if (nights > 0) {
            addLine(elLines, nights + " × " + fmt(data.priceNight), fmt(data.accommodation));
        }
        if (data.guestExtra > 0) {
            addLine(elLines, t("booking.summary_guest_extra", "Extra guest"), fmt(data.guestExtra), { i18nKey: "booking.summary_guest_extra" });
        }
        if (data.serviceItems && data.serviceItems.length) {
            data.serviceItems.forEach(function (s) {
                addLine(elLines, t(s.key, s.name), fmt(s.price), { i18nKey: s.key });
            });
        } else if (data.services > 0) {
            addLine(elLines, t("booking.summary_services", "Additional services"), fmt(data.services), { i18nKey: "booking.summary_services" });
        }
        if (data.cleaning > 0) {
            addLine(elLines, t("booking.summary_cleaning", "Cleaning fee"), fmt(data.cleaning), { i18nKey: "booking.summary_cleaning" });
        }
        if (data.discount > 0) {
            var label = t("booking.summary_discount", "Discount") + (data.coupon ? " (" + data.coupon + ")" : "");
            addLine(elLines, label, "-" + fmt(data.discount), { discount: true });
        }
    }

    // ---- лівий блок: перелік обраних послуг ----
    var elServices = document.querySelector("[data-pay-services]");
    if (elServices) {
        elServices.innerHTML = "";
        var items = data.serviceItems || [];
        if (!items.length) {
            var empty = document.createElement("p");
            empty.className = "payment-service__empty";
            empty.setAttribute("data-i18n", "payment.no_services");
            empty.textContent = t("payment.no_services", "No additional services selected.");
            elServices.appendChild(empty);
        } else {
            items.forEach(function (s) {
                var card = document.createElement("div");
                card.className = "payment-service";

                var head = document.createElement("div");
                head.className = "payment-service__head";
                var nm = document.createElement("span");
                nm.className = "payment-service__name";
                if (s.key) nm.setAttribute("data-i18n", s.key);
                nm.textContent = t(s.key, s.name);
                var pr = document.createElement("span");
                pr.className = "payment-service__price";
                pr.textContent = fmt(s.price);
                head.appendChild(nm);
                head.appendChild(pr);
                card.appendChild(head);

                if (s.title) {
                    var ti = document.createElement("p");
                    ti.className = "payment-service__title";
                    if (s.titleKey) ti.setAttribute("data-i18n", s.titleKey);
                    ti.textContent = t(s.titleKey, s.title);
                    card.appendChild(ti);
                }
                if (s.text) {
                    var tx = document.createElement("p");
                    tx.className = "payment-service__text";
                    if (s.textKey) tx.setAttribute("data-i18n", s.textKey);
                    tx.textContent = t(s.textKey, s.text);
                    card.appendChild(tx);
                }
                elServices.appendChild(card);
            });
        }
    }
})();


// ------- Форми: валідація + тост-повідомлення -------
// Будь-яка <form data-validate data-success="<i18n-ключ>"> перехоплюється:
// поля перевіряються (required + email), при помилці показується тост і
// підсвічуються поля; при успіху — тост подяки і форма очищується.
// Тост також доступний глобально: window.THG.toast(text, "ok"|"err").
"use strict";
(function () {
    // ---- тост ----
    var container = null;
    function ensureContainer() {
        if (container) return container;
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
        return container;
    }
    function showToast(message, type) {
        var c = ensureContainer();
        var el = document.createElement("div");
        el.className = "toast toast--" + (type || "ok");
        el.setAttribute("role", "status");
        el.textContent = message;
        c.appendChild(el);
        requestAnimationFrame(function () { el.classList.add("_show"); });
        var hide = function () {
            el.classList.remove("_show");
            setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
        };
        var timer = setTimeout(hide, 4000);
        el.addEventListener("click", function () { clearTimeout(timer); hide(); });
    }
    window.THG = window.THG || {};
    window.THG.toast = showToast;

    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }

    // ---- валідація ----
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function isEmailField(el) {
        return el.type === "email" || el.getAttribute("data-type") === "email";
    }
    function validateField(el) {
        var val = (el.value || "").trim();
        var ok = true;
        if (el.hasAttribute("required") && !val) ok = false;
        else if (val && isEmailField(el) && !EMAIL_RE.test(val)) ok = false;
        el.classList.toggle("_invalid", !ok);
        return ok;
    }
    function validateForm(form) {
        var fields = form.querySelectorAll("input, textarea, select");
        var valid = true;
        for (var i = 0; i < fields.length; i++) {
            var el = fields[i];
            if (el.type === "submit" || el.type === "button" || el.disabled) continue;
            if (!validateField(el)) valid = false;
        }
        return valid;
    }

    var forms = document.querySelectorAll("form[data-validate]");
    for (var i = 0; i < forms.length; i++) {
        (function (form) {
            // прибирати підсвічування помилки, коли користувач виправляє поле
            form.addEventListener("input", function (e) {
                if (e.target.classList && e.target.classList.contains("_invalid")) validateField(e.target);
            });
            form.addEventListener("change", function (e) {
                if (e.target.tagName === "SELECT" && e.target.classList.contains("_invalid")) validateField(e.target);
            });
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                if (!validateForm(form)) {
                    showToast(t("forms.invalid", "Please fill in the highlighted fields correctly."), "err");
                    return;
                }
                showToast(t(form.getAttribute("data-success"), "Thank you!"), "ok");
                form.reset();
                var inv = form.querySelectorAll("._invalid");
                for (var j = 0; j < inv.length; j++) inv[j].classList.remove("_invalid");
            });
        })(forms[i]);
    }
})();
