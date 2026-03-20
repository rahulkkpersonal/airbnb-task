const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobileDrawer = document.querySelector(".mobile-drawer");
const desktopMenuPopover = document.querySelector(".desktop-menu-popover");
const mobileSearchPill = document.querySelector(".mobile-search-pill");
const mobileSearchPillCopy = document.querySelector(".mobile-search-pill-copy");
const mobileSearchModal = document.querySelector(".mobile-search-modal");
const mobileSearchCloseButtons = document.querySelectorAll("[data-mobile-close]");
const mobileSearchPanels = document.querySelectorAll("[data-mobile-panel]");
const mobileSearchSummaries = document.querySelectorAll("[data-mobile-summary]");
const mobilePanelTriggers = document.querySelectorAll("[data-mobile-open-panel]");
const mobileDestinationInput = document.querySelector(".mobile-destination-input");
const mobileWhereOptions = document.querySelectorAll(".mobile-where-option");
const mobileWhenSummary = document.querySelector(".mobile-when-summary");
const mobileGuestsSummary = document.querySelector(".mobile-guests-summary");
const mobileDatePresetButtons = document.querySelectorAll(".mobile-date-preset");
const mobileDateCalendarTitle = document.querySelector(".mobile-date-calendar-title");
const mobileDateGrid = document.querySelector(".mobile-date-grid");
const mobileDateNavButtons = document.querySelectorAll(".mobile-date-nav-button");
const guestStepperButtons = document.querySelectorAll(".guest-stepper-button");
const guestStepperOutputs = document.querySelectorAll("[data-guest-output]");
const mobileClearButton = document.querySelector(".mobile-clear-button");
const mobileSubmitButton = document.querySelector(".mobile-submit-button");
const topTabs = document.querySelectorAll(".nav-tab");
const mobileTabs = document.querySelectorAll(".mobile-tab");
const mobileServiceTabs = document.querySelectorAll(".mobile-service-tab");
const searchPanel = document.querySelector(".search-panel");
const whereField = document.querySelector(".search-field-where");
const whereInput = document.querySelector(".where-input");
const wherePopover = document.querySelector(".where-popover");
const whereOptions = document.querySelectorAll(".where-option");
const whenField = document.querySelector(".search-field-when");
const whenInput = document.querySelector(".when-input");
const datePopover = document.querySelector(".date-popover");
const datePresetButtons = document.querySelectorAll(".date-preset");
const dateCalendarTitle = document.querySelector(".date-calendar-title");
const dateGrid = document.querySelector(".date-grid");
const dateNavButtons = document.querySelectorAll(".date-nav-button");
const stickyPillTriggers = document.querySelectorAll("[data-sticky-target]");
const stickyWhereCopy = document.querySelectorAll(".sticky-pill-copy")[0];
const stickyWhenCopy = document.querySelectorAll(".sticky-pill-copy")[1];
const serviceField = document.querySelector(".search-field-service");
const serviceInput = document.querySelector(".service-input");
const servicePopover = document.querySelector(".service-popover");
const serviceChips = document.querySelectorAll(".service-chip");
const stickyServiceCopy = document.querySelectorAll(".sticky-pill-copy")[2];
const inspirationGrid = document.querySelector("#inspiration-grid");
const inspirationTabs = document.querySelectorAll(".inspiration-tab");
const railButtons = document.querySelectorAll(".rail-button");
const cardRails = document.querySelectorAll(".card-rail");

const today = new Date();
today.setHours(0, 0, 0, 0);

document.body.appendChild(mobileSearchModal);

let calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = null;
let selectedPreset = "";
let activeMobilePanel = "where";
let desktopSearchExpanded = false;
let desktopSearchExpandedScrollY = 0;
let desktopSearchExpandedAt = 0;
const guestCounts = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0
};

const rows = {
  chefs: [
    { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", title: "Authentic Roman meal", subtitle: "From ₹3,742 / guest", price: "Minimum ₹7,482 to book", rating: "★ 4.97" },
    { image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", title: "Hyperlocal, foraged fare by Clair", subtitle: "From ₹9,231 / guest", price: "Minimum ₹17,716 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", title: "Behind the flame and fusion flavors", subtitle: "From ₹6,266 / guest", price: "Minimum ₹10,965 to book", rating: "★ 5.0", tag: "Popular" },
    { image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80", title: "Vibrant Cali-Mediterranean menus", subtitle: "From ₹6,061 / group", price: "", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", title: "Luxury private dining by Chef Jim", subtitle: "From ₹15,385 / guest", price: "Minimum ₹1,21,215 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80", title: "Catalan cuisine by Cristina", subtitle: "From ₹4,276 / guest", price: "", rating: "" },
    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", title: "International gourmet fusion by Brian", subtitle: "From ₹8,392 / guest", price: "", rating: "" },
     { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", title: "Authentic Roman meal", subtitle: "From ₹3,742 / guest", price: "Minimum ₹7,482 to book", rating: "★ 4.97" },
    { image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", title: "Hyperlocal, foraged fare by Clair", subtitle: "From ₹9,231 / guest", price: "Minimum ₹17,716 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", title: "Behind the flame and fusion flavors", subtitle: "From ₹6,266 / guest", price: "Minimum ₹10,965 to book", rating: "★ 5.0", tag: "Popular" },
    { image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80", title: "Vibrant Cali-Mediterranean menus", subtitle: "From ₹6,061 / group", price: "", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", title: "Luxury private dining by Chef Jim", subtitle: "From ₹15,385 / guest", price: "Minimum ₹1,21,215 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80", title: "Catalan cuisine by Cristina", subtitle: "From ₹4,276 / guest", price: "", rating: "" },
    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", title: "International gourmet fusion by Brian", subtitle: "From ₹8,392 / guest", price: "", rating: "" }
    
    
  ],
  training: [
    { image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", title: "Yoga and embodiment by Julia", subtitle: "From ₹2,332 / guest", price: "Minimum ₹18,648 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80", title: "High-energy workouts by Vicky", subtitle: "Redondo Beach, United States", price: "From ₹14,919 / guest", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80", title: "Total body training by Peter", subtitle: "Pasadena, United States", price: "From ₹8,859 / guest", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80", title: "Barre and wellness pop-up", subtitle: "Miami, United States", price: "From ₹4,663 / guest", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=900&q=80", title: "Sun-sweat by Nishant", subtitle: "San Diego, United States", price: "From ₹9,325 / guest", rating: "" },
    { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80", title: "Ritual yoga by Ana Ponzo", subtitle: "Zapopan, Mexico", price: "From ₹2,089 / guest", rating: "Minimum ₹4,177 to book" },
   { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", title: "Authentic Roman meal", subtitle: "From ₹3,742 / guest", price: "Minimum ₹7,482 to book", rating: "★ 4.97" },
    { image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", title: "Hyperlocal, foraged fare by Clair", subtitle: "From ₹9,231 / guest", price: "Minimum ₹17,716 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", title: "Behind the flame and fusion flavors", subtitle: "From ₹6,266 / guest", price: "Minimum ₹10,965 to book", rating: "★ 5.0", tag: "Popular" },
    { image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80", title: "Vibrant Cali-Mediterranean menus", subtitle: "From ₹6,061 / group", price: "", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", title: "Luxury private dining by Chef Jim", subtitle: "From ₹15,385 / guest", price: "Minimum ₹1,21,215 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80", title: "Catalan cuisine by Cristina", subtitle: "From ₹4,276 / guest", price: "", rating: "" },
    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", title: "International gourmet fusion by Brian", subtitle: "From ₹8,392 / guest", price: "", rating: "" }
     ],
  massage: [
    { image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80", title: "Good massage mobile services", subtitle: "From ₹13,987 / guest", price: "", rating: "★ 5.0", tag: "Popular" },
    { image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80", title: "Hollywood recovery and relaxation", subtitle: "Los Angeles, United States", price: "From ₹5,595 / guest", rating: "★ 4.76" },
    { image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80", title: "Deep tissue massage by Olga", subtitle: "From ₹9,277 / guest", price: "", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80", title: "The massage escape guy", subtitle: "In-home massage", price: "From ₹7,460 / guest", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80", title: "Relaxing massages by Raul", subtitle: "Mexico City, Mexico", price: "From ₹7,002 / guest", rating: "" },
    { image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80", title: "Aromatherapeutic massage by Jenna", subtitle: "Falmouth, United States", price: "From ₹16,784 / guest", rating: "★ 5.0" },
     { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", title: "Authentic Roman meal", subtitle: "From ₹3,742 / guest", price: "Minimum ₹7,482 to book", rating: "★ 4.97" },
    { image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", title: "Hyperlocal, foraged fare by Clair", subtitle: "From ₹9,231 / guest", price: "Minimum ₹17,716 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", title: "Behind the flame and fusion flavors", subtitle: "From ₹6,266 / guest", price: "Minimum ₹10,965 to book", rating: "★ 5.0", tag: "Popular" },
    { image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80", title: "Vibrant Cali-Mediterranean menus", subtitle: "From ₹6,061 / group", price: "", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", title: "Luxury private dining by Chef Jim", subtitle: "From ₹15,385 / guest", price: "Minimum ₹1,21,215 to book", rating: "★ 5.0" },
    { image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80", title: "Catalan cuisine by Cristina", subtitle: "From ₹4,276 / guest", price: "", rating: "" },
    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", title: "International gourmet fusion by Brian", subtitle: "From ₹8,392 / guest", price: "", rating: "" }
    
  ]
};

const inspirationGroups = {
  popular: [["Athens", "House rentals"], ["North Myrtle Beach", "Villa rentals"], ["Nice", "Holiday rentals"], ["Madrid", "Holiday rentals"], ["Oahu", "Apartment rentals"], ["Port Aransas", "Cottage rentals"], ["Tampa", "Monthly rentals"], ["Clearwater", "Monthly rentals"], ["Outer Banks", "House rentals"], ["Destin", "Apartment rentals"], ["San Diego", "Cabin rentals"], ["Ocean City", "Monthly rentals"], ["Osaka", "Monthly rentals"], ["Sarasota", "House rentals"], ["Branson", "Cottage rentals"], ["London", "Flat rentals"], ["Milan", "Holiday rentals"], ["Show more", "⌄"]],
  arts: [["Florence", "Museum stays"], ["Vienna", "Opera weekends"], ["Kyoto", "Craft districts"], ["Paris", "Gallery breaks"], ["Berlin", "Design apartments"], ["Lisbon", "Cultural escapes"]],
  beach: [["Goa", "Beach villas"], ["Phuket", "Oceanfront homes"], ["Bali", "Clifftop stays"], ["Malibu", "Surf houses"], ["Mykonos", "Sea-view rentals"], ["Byron Bay", "Coastal cabins"]],
  mountains: [["Manali", "Hill cottages"], ["Aspen", "Ski chalets"], ["Zermatt", "Alpine stays"], ["Queenstown", "Lodge rentals"], ["Leh", "Mountain retreats"], ["Interlaken", "Cabin rentals"]],
  outdoors: [["Rishikesh", "River camps"], ["Moab", "Adventure basecamps"], ["Banff", "Lake lodges"], ["Sedona", "Desert stays"], ["Udaipur", "Nature escapes"], ["Pokhara", "Lakeside rooms"]],
  things: [["Tokyo", "Food tours"], ["Barcelona", "Street photography"], ["Dubai", "Luxury experiences"], ["Cape Town", "Wellness weekends"], ["Singapore", "Family itineraries"], ["Seoul", "Nightlife trips"]]
};

function setActiveTab(tabName) {
  topTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  mobileTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  mobileServiceTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
}

function syncHeaderState() {
  const isDesktop = window.innerWidth > 860;
  const desktopCollapsed = isDesktop && window.scrollY > 56 && !desktopSearchExpanded;
  const mobileCollapsed = !isDesktop && window.scrollY > 36;

  siteHeader.classList.toggle("is-scrolled", desktopCollapsed);
  siteHeader.classList.toggle("is-search-expanded", isDesktop && desktopSearchExpanded);
  siteHeader.classList.toggle("is-mobile-scrolled", mobileCollapsed);
}

function setDesktopSearchExpanded(isExpanded) {
  desktopSearchExpanded = isExpanded;

  if (isExpanded) {
    desktopSearchExpandedAt = Date.now();
    desktopSearchExpandedScrollY = window.scrollY;
    requestAnimationFrame(() => {
      desktopSearchExpandedScrollY = window.scrollY;
    });
  }

  syncHeaderState();
}

function openDesktopSearchPanel(target) {
  if (window.innerWidth <= 860) {
    return;
  }

  setDesktopSearchExpanded(true);

  requestAnimationFrame(() => {
    if (target === "where") {
      openWherePopover();
      return;
    }

    if (target === "when") {
      openDatePopover();
      return;
    }

    openServicePopover();
  });
}

function handleHeaderScroll() {
  if (
    window.innerWidth > 860 &&
    desktopSearchExpanded &&
    Date.now() - desktopSearchExpandedAt > 250 &&
    Math.abs(window.scrollY - desktopSearchExpandedScrollY) > 1
  ) {
    setDesktopSearchExpanded(false);
    closeWherePopover();
    closeDatePopover();
    closeServicePopover();
  }

  syncHeaderState();
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(date);
}

function formatMonthTitle(date) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
}

function formatGuestSummary() {
  const totalGuests = guestCounts.adults + guestCounts.children;
  const summaryParts = [];

  if (totalGuests > 0) {
    summaryParts.push(`${totalGuests} guest${totalGuests > 1 ? "s" : ""}`);
  }

  if (guestCounts.infants > 0) {
    summaryParts.push(`${guestCounts.infants} infant${guestCounts.infants > 1 ? "s" : ""}`);
  }

  if (guestCounts.pets > 0) {
    summaryParts.push(`${guestCounts.pets} pet${guestCounts.pets > 1 ? "s" : ""}`);
  }

  return summaryParts.join(", ") || "Add guests";
}

function updateMobilePillCopy() {
  const parts = [];

  if (whereInput.value) {
    parts.push(whereInput.value);
  }

  if (whenInput.value) {
    parts.push(whenInput.value);
  }

  const guestSummary = formatGuestSummary();
  if (guestSummary !== "Add guests") {
    parts.push(guestSummary);
  }

  mobileSearchPillCopy.textContent = parts.join(" / ") || "Start your search";
}

function updateGuestUI() {
  guestStepperOutputs.forEach((output) => {
    output.textContent = String(guestCounts[output.dataset.guestOutput]);
  });

  guestStepperButtons.forEach((button) => {
    const guestType = button.dataset.guestType;
    const step = Number(button.dataset.step);
    button.disabled = step < 0 && guestCounts[guestType] === 0;
  });

  mobileGuestsSummary.textContent = formatGuestSummary();
  updateMobilePillCopy();
}

function setMobilePanel(panelName) {
  activeMobilePanel = panelName;

  mobileSearchPanels.forEach((panel) => {
    const isActive = panel.dataset.mobilePanel === panelName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  mobileSearchSummaries.forEach((summary) => {
    summary.hidden = summary.dataset.mobileSummary === panelName;
  });
}

function openMobileSearchModal(initialPanel = "where") {
  if (window.innerWidth > 860) {
    return;
  }

  closeMobileMenu();
  closeDesktopMenu();
  closeWherePopover();
  closeDatePopover();
  closeServicePopover();
  mobileSearchModal.hidden = false;
  mobileSearchModal.classList.add("is-open");
  document.body.classList.add("body-modal-open");
  mobileWhereOptions.forEach((option) => option.classList.remove("is-hidden"));
  setMobilePanel(initialPanel);
}

function closeMobileSearchModal() {
  mobileSearchModal.hidden = true;
  mobileSearchModal.classList.remove("is-open");
  document.body.classList.remove("body-modal-open");
  setMobilePanel("where");
}

function getWeekendRange(baseDate) {
  const weekendStart = new Date(baseDate);
  const day = weekendStart.getDay();
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  weekendStart.setDate(weekendStart.getDate() + daysUntilFriday);

  const weekendEnd = new Date(weekendStart);
  weekendEnd.setDate(weekendEnd.getDate() + 2);

  return { start: weekendStart, end: weekendEnd };
}

function syncPresetCopy() {
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const weekend = getWeekendRange(today);

  [...datePresetButtons, ...mobileDatePresetButtons].forEach((button) => {
    const copy = button.querySelector(".date-preset-copy");
    const mobileCopy = button.querySelector(".mobile-date-preset-copy");

    if (button.dataset.preset === "today") {
      if (copy) {
        copy.textContent = formatShortDate(today);
      }
      if (mobileCopy) {
        mobileCopy.textContent = formatShortDate(today);
      }
    }

    if (button.dataset.preset === "tomorrow") {
      if (copy) {
        copy.textContent = formatShortDate(tomorrow);
      }
      if (mobileCopy) {
        mobileCopy.textContent = formatShortDate(tomorrow);
      }
    }

    if (button.dataset.preset === "weekend") {
      if (copy) {
        copy.textContent = `${formatShortDate(weekend.start)}-${formatShortDate(weekend.end)}`;
      }
      if (mobileCopy) {
        mobileCopy.textContent = `${formatShortDate(weekend.start)}-${formatShortDate(weekend.end)}`;
      }
    }
  });
}

function applyWhenValue(label) {
  whenInput.value = label;
  stickyWhenCopy.textContent = label || "Anytime";
  mobileWhenSummary.textContent = label || "Add dates";
  updateMobilePillCopy();
}

function applyWhereValue(label) {
  whereInput.value = label;
  stickyWhereCopy.textContent = label || "Anywhere";

  whereOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.destination === label);
  });

  mobileWhereOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.destination === label);
  });

  if (mobileDestinationInput && document.activeElement !== mobileDestinationInput) {
    mobileDestinationInput.value = label || "";
  }

  updateMobilePillCopy();
}

function applyServiceValue(label) {
  serviceInput.value = label;
  stickyServiceCopy.textContent = label || "Add service";
}

function buildCalendarMarkup() {
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startWeekday = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const slots = [];

  for (let i = 0; i < startWeekday; i += 1) {
    slots.push(`<span class="calendar-day-empty" aria-hidden="true"></span>`);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const currentDate = new Date(year, month, day);
    const isToday = currentDate.getTime() === today.getTime();
    const isSelected = selectedDate && currentDate.getTime() === selectedDate.getTime();

    slots.push(`
      <button
        class="calendar-day${isToday ? " is-today" : ""}${isSelected ? " is-selected" : ""}"
        type="button"
        data-date="${currentDate.toISOString()}"
        role="gridcell"
        aria-label="${currentDate.toDateString()}"
      >
        ${day}
      </button>
    `);
  }

  return slots.join("");
}

function renderCalendar() {
  const calendarMarkup = buildCalendarMarkup();
  dateCalendarTitle.textContent = formatMonthTitle(calendarMonth);
  mobileDateCalendarTitle.textContent = formatMonthTitle(calendarMonth);
  dateGrid.innerHTML = calendarMarkup;
  mobileDateGrid.innerHTML = calendarMarkup;
}

function syncDateSelections() {
  [...datePresetButtons, ...mobileDatePresetButtons].forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === selectedPreset);
  });
}

function openDatePopover() {
  if (window.innerWidth <= 860) {
    return;
  }

  closeWherePopover();
  closeServicePopover();
  closeDesktopMenu();
  datePopover.hidden = false;
  whenField.classList.add("is-active");
  whenInput.setAttribute("aria-expanded", "true");
}

function closeDatePopover() {
  datePopover.hidden = true;
  whenField.classList.remove("is-active");
  whenInput.setAttribute("aria-expanded", "false");
}

function openWherePopover() {
  if (window.innerWidth <= 860) {
    return;
  }

  closeDatePopover();
  closeServicePopover();
  closeDesktopMenu();
  wherePopover.hidden = false;
  whereField.classList.add("is-active");
  whereInput.setAttribute("aria-expanded", "true");
}

function closeWherePopover() {
  wherePopover.hidden = true;
  whereField.classList.remove("is-active");
  whereInput.setAttribute("aria-expanded", "false");
}

function openServicePopover() {
  if (window.innerWidth <= 860) {
    return;
  }

  closeWherePopover();
  closeDatePopover();
  closeDesktopMenu();
  servicePopover.hidden = false;
  serviceField.classList.add("is-active");
  serviceInput.setAttribute("aria-expanded", "true");
}

function closeServicePopover() {
  servicePopover.hidden = true;
  serviceField.classList.remove("is-active");
  serviceInput.setAttribute("aria-expanded", "false");
}

function closeDesktopMenu() {
  desktopMenuPopover.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}

function closeMobileMenu() {
  mobileDrawer.classList.remove("is-open");
  mobileDrawer.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}

function clearMobileSearch() {
  selectedDate = null;
  selectedPreset = "";
  calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  applyWhereValue("");
  applyWhenValue("");

  Object.keys(guestCounts).forEach((key) => {
    guestCounts[key] = 0;
  });

  mobileDestinationInput.value = "";
  mobileWhereOptions.forEach((option) => option.classList.remove("is-hidden"));
  syncDateSelections();
  renderCalendar();
  updateGuestUI();
}

function selectPreset(preset) {
  selectedPreset = preset;
  selectedDate = null;

  if (preset === "today") {
    calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    applyWhenValue("Today");
  }

  if (preset === "tomorrow") {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    calendarMonth = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), 1);
    applyWhenValue("Tomorrow");
  }

  if (preset === "weekend") {
    const weekend = getWeekendRange(today);
    calendarMonth = new Date(weekend.start.getFullYear(), weekend.start.getMonth(), 1);
    applyWhenValue("This weekend");
  }

  syncDateSelections();
  renderCalendar();
  closeDatePopover();

  if (!mobileSearchModal.hidden) {
    setMobilePanel("where");
  }
}

function createCard(card) {
  return `
    <article class="listing-card">
      <div class="card-link">
        <div class="card-media">
          ${card.tag ? `<span class="card-tag">${card.tag}</span>` : ""}
          <button class="heart-button" type="button" aria-label="Save listing">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M12 20.5s-7-4.3-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 5.2-7 9.5-7 9.5Z" />
            </svg>
          </button>
          <img src="${card.image}" alt="${card.title}" loading="lazy" />
        </div>
        <div class="card-content">
          <h3 class="card-title">${card.title}</h3>
          <p class="card-subtitle">${card.subtitle}</p>
          ${card.price ? `<p class="card-price">${card.price}</p>` : ""}
          ${card.rating ? `<p class="card-rating">${card.rating}</p>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderRows() {
  document.querySelector("#chefs-row").innerHTML = rows.chefs.map(createCard).join("");
  document.querySelector("#training-row").innerHTML = rows.training.map(createCard).join("");
  document.querySelector("#massage-row").innerHTML = rows.massage.map(createCard).join("");
}

function renderInspiration(groupName) {
  inspirationGrid.innerHTML = inspirationGroups[groupName]
    .map(([place, type]) => `<a class="inspiration-link" href="#"><strong>${place}</strong><span>${type}</span></a>`)
    .join("");
}

function getRailStep(rail) {
  const firstCard = rail.querySelector(".listing-card");
  if (!firstCard) {
    return 0;
  }

  const cardWidth = firstCard.getBoundingClientRect().width;
  const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap || window.getComputedStyle(rail).gap || "0");
  return Math.round(cardWidth + gap);
}

function scrollRail(rail, direction = 1) {
  const step = getRailStep(rail);
  if (!step) {
    return;
  }

  const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
  const targetScrollLeft = rail.scrollLeft + direction * step;

  if (direction > 0 && targetScrollLeft >= maxScrollLeft - 4) {
    rail.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }

  if (direction < 0 && rail.scrollLeft <= 4) {
    rail.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    return;
  }

  rail.scrollBy({ left: direction * step, behavior: "smooth" });
}

function setupAutoSliding() {
  cardRails.forEach((rail) => {
    let autoSlideTimer = null;
    let resumeTimer = null;
    let isPaused = false;

    const stopAutoSlide = () => {
      window.clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    };

    const startAutoSlide = () => {
      stopAutoSlide();

      if (isPaused || document.hidden) {
        return;
      }

      autoSlideTimer = window.setInterval(() => {
        scrollRail(rail, 1);
      }, 3200);
    };

    const pauseAutoSlide = () => {
      isPaused = true;
      window.clearTimeout(resumeTimer);
      stopAutoSlide();
    };

    const queueAutoSlideResume = () => {
      isPaused = false;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        startAutoSlide();
      }, 2200);
    };

    rail.addEventListener("mouseenter", pauseAutoSlide);
    rail.addEventListener("mouseleave", queueAutoSlideResume);
    rail.addEventListener("focusin", pauseAutoSlide);
    rail.addEventListener("focusout", queueAutoSlideResume);
    rail.addEventListener("pointerdown", pauseAutoSlide);
    rail.addEventListener("pointerup", queueAutoSlideResume);
    rail.addEventListener("touchstart", pauseAutoSlide, { passive: true });
    rail.addEventListener("touchend", queueAutoSlideResume, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoSlide();
        return;
      }

      startAutoSlide();
    });

    startAutoSlide();
  });
}

renderRows();
renderInspiration("popular");
syncPresetCopy();
renderCalendar();
syncDateSelections();
updateGuestUI();
updateMobilePillCopy();
setupAutoSliding();

topTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

mobileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
    closeMobileMenu();
  });
});

mobileServiceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

mobileSearchPill.addEventListener("click", () => {
  openMobileSearchModal("where");
});

stickyPillTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openDesktopSearchPanel(trigger.dataset.stickyTarget);
  });
});

mobileSearchCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileSearchModal();
  });
});

mobilePanelTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    setMobilePanel(trigger.dataset.mobileOpenPanel);
  });
});

mobileDestinationInput.addEventListener("input", () => {
  const query = mobileDestinationInput.value.trim().toLowerCase();

  mobileWhereOptions.forEach((option) => {
    const matches = option.dataset.destination.toLowerCase().includes(query);
    option.classList.toggle("is-hidden", !matches);
  });
});

menuButton.addEventListener("click", () => {
  const isDesktop = window.innerWidth > 860;
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  if (isDesktop) {
    if (isOpen) {
      closeDesktopMenu();
      return;
    }

    closeWherePopover();
    closeDatePopover();
    closeServicePopover();
    desktopMenuPopover.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
    return;
  }

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileDrawer.hidden = isOpen;
  mobileDrawer.classList.toggle("is-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMobileMenu();
    closeDesktopMenu();
    menuButton.focus();
  }

  if (event.key === "Escape" && !mobileSearchModal.hidden) {
    closeMobileSearchModal();
  }
});

inspirationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    inspirationTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderInspiration(tab.dataset.group);
  });
});

railButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rail = document.getElementById(button.dataset.target);
    const direction = button.dataset.direction === "next" ? 1 : -1;
    scrollRail(rail, direction);
  });
});

searchPanel.addEventListener("submit", (event) => {
  event.preventDefault();
});

whereField.addEventListener("click", (event) => {
  event.preventDefault();
  if (wherePopover.hidden) {
    openWherePopover();
  } else {
    closeWherePopover();
  }
});

whenField.addEventListener("click", (event) => {
  event.preventDefault();
  if (datePopover.hidden) {
    openDatePopover();
  } else {
    closeDatePopover();
  }
});

serviceField.addEventListener("click", (event) => {
  event.preventDefault();
  if (servicePopover.hidden) {
    openServicePopover();
  } else {
    closeServicePopover();
  }
});

datePresetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectPreset(button.dataset.preset);
  });
});

mobileDatePresetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectPreset(button.dataset.preset);
  });
});

dateNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextMonth = new Date(calendarMonth);
    nextMonth.setMonth(calendarMonth.getMonth() + (button.dataset.monthNav === "next" ? 1 : -1));
    calendarMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    selectedPreset = "";
    syncDateSelections();
    renderCalendar();
  });
});

mobileDateNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextMonth = new Date(calendarMonth);
    nextMonth.setMonth(calendarMonth.getMonth() + (button.dataset.monthNav === "next" ? 1 : -1));
    calendarMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    selectedPreset = "";
    syncDateSelections();
    renderCalendar();
  });
});

dateGrid.addEventListener("click", (event) => {
  const dayButton = event.target.closest(".calendar-day");
  if (!dayButton) {
    return;
  }

  selectedDate = new Date(dayButton.dataset.date);
  selectedDate.setHours(0, 0, 0, 0);
  selectedPreset = "";
  syncDateSelections();
  applyWhenValue(formatShortDate(selectedDate));
  renderCalendar();
  closeDatePopover();
});

mobileDateGrid.addEventListener("click", (event) => {
  const dayButton = event.target.closest(".calendar-day");
  if (!dayButton) {
    return;
  }

  selectedDate = new Date(dayButton.dataset.date);
  selectedDate.setHours(0, 0, 0, 0);
  selectedPreset = "";
  syncDateSelections();
  applyWhenValue(formatShortDate(selectedDate));
  renderCalendar();
  setMobilePanel("where");
});

whereOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyWhereValue(option.dataset.destination);
    closeWherePopover();
  });
});

mobileWhereOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyWhereValue(option.dataset.destination);
    mobileWhereOptions.forEach((item) => item.classList.remove("is-hidden"));
    setMobilePanel("where");
  });
});

serviceChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    serviceChips.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.service === chip.dataset.service);
    });
    applyServiceValue(chip.dataset.service);
    closeServicePopover();
  });
});

guestStepperButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const guestType = button.dataset.guestType;
    const step = Number(button.dataset.step);
    const nextValue = Math.max(0, Math.min(16, guestCounts[guestType] + step));

    guestCounts[guestType] = nextValue;
    updateGuestUI();
  });
});

mobileClearButton.addEventListener("click", () => {
  clearMobileSearch();
});

mobileSubmitButton.addEventListener("click", () => {
  closeMobileSearchModal();
});

document.addEventListener("click", (event) => {
  if (
    !wherePopover.hidden &&
    !event.target.closest(".search-field-where") &&
    !event.target.closest(".where-popover")
  ) {
    closeWherePopover();
  }

  if (
    !datePopover.hidden &&
    !event.target.closest(".search-field-when") &&
    !event.target.closest(".date-popover")
  ) {
    closeDatePopover();
  }

  if (
    !servicePopover.hidden &&
    !event.target.closest(".search-field-service") &&
    !event.target.closest(".service-popover")
  ) {
    closeServicePopover();
  }

  if (
    !desktopMenuPopover.hidden &&
    !event.target.closest(".desktop-menu-popover") &&
    !event.target.closest(".menu-button")
  ) {
    closeDesktopMenu();
  }
});

window.addEventListener("scroll", handleHeaderScroll, { passive: true });
window.addEventListener("resize", syncHeaderState);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !wherePopover.hidden) {
    closeWherePopover();
  }

  if (event.key === "Escape" && !datePopover.hidden) {
    closeDatePopover();
  }

  if (event.key === "Escape" && !servicePopover.hidden) {
    closeServicePopover();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMobileMenu();
    closeMobileSearchModal();
  } else {
    setDesktopSearchExpanded(false);
    closeDesktopMenu();
    closeWherePopover();
    closeDatePopover();
    closeServicePopover();
  }
});

syncHeaderState();
