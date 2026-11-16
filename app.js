/**
 * YASH HEALTH CLINIC — PRODUCTION CORE CONTROLLER
 * Architecture: Centralized Config + Live IST Engine + Google Maps Busyness Visualizer + Dynamic WhatsApp Dispatcher
 */

// -----------------------------------------------------------------------------
// 1. CENTRALIZED CLINIC CONFIG & REAL EXTRACTED CLINIC DATA
// -----------------------------------------------------------------------------
const CLINIC_CONFIG = {
  clinicName: "Yash Health Clinic",
  positioningTagline: "Multispeciality Primary Care, Family Medicine & Integrative Healthcare Center",
  leadDoctor: "Dr. Yash Kumar",
  qualifications: "BAMS — General Physician & Family Medicine Specialist",
  googleRating: "5.0",
  reviewCount: 7,
  googleMapsUrl: "https://share.google/Ky9ZX5eQNC7bQ0FjZ",
  phoneDisplay: "+91 84494 30219",
  phoneTel: "+918449430219",
  whatsappNumber: "918449430219",
  address: "Gali No. 2, Hoshiyarpur, Hoshiarpur Village, Sector 51, Noida, Uttar Pradesh 201303",
  operatingHoursText: "Monday to Sunday: 06:00 AM – 10:00 PM (Open 16 Hours Daily, All 7 Days)",
  operatingHours: {
    openHour: 6,
    openMinute: 0,
    closeHour: 22,
    closeMinute: 0
  },
  catchments: [
    "Sector 51 Noida",
    "Hoshiyarpur",
    "Sector 50",
    "Sector 52",
    "Sector 34",
    "Sector 61",
    "Sector 71–78 Noida"
  ],
  verifiedFacilities: [
    "Onsite Clinical Consultation",
    "In-House Medicine Dispensary",
    "Dedicated Maternal & Child Nursing Room",
    "WhatsApp Follow-Up Support"
  ],
  pricing: {
    standardOpd: 200,
    consultationPlusMedicine: 350,
    chronicCarePlan: "Custom Routine"
  }
};

// -----------------------------------------------------------------------------
// CLINIC ASSETS SLOTS
// High-craft fallback vector assets embedded as data URIs.
// Swap any value with your direct ImgBB / Postimages .jpg / .png link anytime.
// -----------------------------------------------------------------------------
const CLINIC_ASSETS = {
  // Aspect-ratio: 4/5 (Doctor Portrait in Consultation Cabin)
  doctorPortrait: "https://i.postimg.cc/vB7q2MRD/Dr-Yash-Portrait.jpg",
  
  // Aspect-ratio: 16/9 (Signboard & Entrance in Gali No. 2, Sector 51 Noida)
  clinicExterior: "https://i.postimg.cc/76wzj77D/Dr-Yash-Clinic-Exterior.webp",
  
  // Aspect-ratio: 4/3 (Diagnostic & Consultation Chamber)
  consultationRoom: "https://i.postimg.cc/6QdRHz73/Dr-Yash-Consultation-Room.webp",
  
  // Aspect-ratio: 4/3 (In-house medicine dispensary)
  pharmacyWing: "https://i.postimg.cc/G2dD6YYd/Dr-Yash-Pharmacy-Wing-jpg.jpg",
  
  // Aspect-ratio: 4/3 (Dedicated maternal & child nursing room)
  nursingRoom: "https://i.postimg.cc/pdD80k9V/Dr-Yash-Observation-Room-jpg.jpg"
};

// SVG Fallback Generator for pristine offline/immediate rendering
const SVG_FALLBACKS = {
  doctorPortrait: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%"><defs><linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23273951"/><stop offset="100%" stop-color="%231a2636"/></linearGradient><linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23ffffff"/><stop offset="100%" stop-color="%23e8edf2"/></linearGradient></defs><rect width="400" height="500" fill="url(%23bgGrad)"/><circle cx="200" cy="160" r="64" fill="%23e2e8f0"/><path d="M120 380 C130 260 270 260 280 380 Z" fill="url(%23coatGrad)"/><path d="M170 260 L200 330 L230 260" stroke="%232779a7" stroke-width="4" fill="none"/><circle cx="200" cy="340" r="14" fill="%232779a7"/><text x="200" y="420" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="18" font-weight="700" fill="%23ffffff" text-anchor="middle">DR. YASH KUMAR</text><text x="200" y="445" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="13" font-weight="500" fill="%23b0c4de" text-anchor="middle">BAMS • General Physician &amp; Family Care</text><rect x="110" y="460" width="180" height="24" rx="12" fill="%2324b47e"/><text x="200" y="476" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="11" font-weight="700" fill="%23ffffff" text-anchor="middle">SECTOR 51, NOIDA</text></svg>`,

  clinicExterior: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="extGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23f6f9fc"/><stop offset="100%" stop-color="%23e2e8f0"/></linearGradient></defs><rect width="800" height="450" fill="url(%23extGrad)"/><rect x="140" y="60" width="520" height="90" rx="8" fill="%23273951"/><text x="400" y="105" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="28" font-weight="800" fill="%23ffffff" text-anchor="middle" letter-spacing="1">YASH HEALTH CLINIC</text><text x="400" y="132" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="14" font-weight="600" fill="%2324b47e" text-anchor="middle">DR. YASH KUMAR (BAMS) • GALI NO. 2, SECTOR 51 NOIDA</text><rect x="220" y="180" width="360" height="270" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="4"/><line x1="400" y1="180" x2="400" y2="450" stroke="%23cbd5e1" stroke-width="4"/><rect x="260" y="240" width="100" height="150" fill="%23eaf2f8" rx="4"/><rect x="440" y="240" width="100" height="150" fill="%23eaf2f8" rx="4"/><rect x="330" y="40" width="140" height="24" rx="12" fill="%2324b47e"/><text x="400" y="56" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="11" font-weight="700" fill="%23ffffff" text-anchor="middle">OPEN DAILY 6 AM – 10 PM</text></svg>`,

  consultationRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%"><rect width="600" height="450" fill="%23f8fafc"/><rect x="50" y="240" width="220" height="160" rx="6" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><circle cx="160" cy="210" r="30" fill="%232779a7" opacity="0.2"/><path d="M160 190 v40 M140 210 h40" stroke="%232779a7" stroke-width="4" stroke-linecap="round"/><rect x="310" y="270" width="240" height="130" rx="4" fill="%23e2e8f0"/><line x1="310" y1="270" x2="550" y2="270" stroke="%232779a7" stroke-width="6"/><circle cx="430" cy="240" r="16" fill="%2324b47e"/><text x="300" y="80" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="20" font-weight="700" fill="%23273951" text-anchor="middle">Diagnostic &amp; Patient Cabin</text><text x="300" y="110" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="14" fill="%2364748d" text-anchor="middle">Sector 51 Noida • Hygienic 1-on-1 Consultation</text></svg>`,

  pharmacyWing: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%"><rect width="600" height="450" fill="%23f1f5f9"/><rect x="80" y="80" width="440" height="260" rx="6" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><line x1="80" y1="150" x2="520" y2="150" stroke="%23e2e8f0" stroke-width="3"/><line x1="80" y1="220" x2="520" y2="220" stroke="%23e2e8f0" stroke-width="3"/><rect x="110" y="105" width="28" height="35" rx="3" fill="%232779a7"/><rect x="150" y="100" width="34" height="40" rx="3" fill="%2324b47e"/><rect x="196" y="110" width="24" height="30" rx="3" fill="%23e2e8f0"/><rect x="235" y="102" width="30" height="38" rx="3" fill="%232779a7"/><rect x="110" y="175" width="32" height="35" rx="3" fill="%2324b47e"/><rect x="154" y="170" width="26" height="40" rx="3" fill="%232779a7"/><rect x="190" y="172" width="40" height="38" rx="3" fill="%23f59e0b"/><rect x="50" y="340" width="500" height="60" rx="4" fill="%23273951"/><text x="300" y="375" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="16" font-weight="700" fill="%23ffffff" text-anchor="middle">In-House Verified Medicine Dispensary</text></svg>`,

  nursingRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%"><rect width="600" height="450" fill="%23fdfaf7"/><rect x="100" y="160" width="180" height="210" rx="16" fill="%23ffffff" stroke="%23fed7aa" stroke-width="2"/><circle cx="190" cy="130" r="32" fill="%23f97316" opacity="0.15"/><path d="M180 130 C180 115 200 115 200 130 C200 145 180 145 180 130" stroke="%23ea580c" stroke-width="3" fill="none"/><rect x="330" y="220" width="180" height="150" rx="8" fill="%23f1f5f9" stroke="%23cbd5e1" stroke-width="2"/><circle cx="420" cy="270" r="20" fill="%2324b47e" opacity="0.2"/><text x="300" y="80" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="20" font-weight="700" fill="%23273951" text-anchor="middle">Private Maternal &amp; Child Nursing Room</text><text x="300" y="110" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="14" fill="%2364748d" text-anchor="middle">Dedicated, sterile and quiet family-friendly suite</text></svg>`
};

// -----------------------------------------------------------------------------
// 2. LIVE IST CLINIC STATUS ENGINE
// -----------------------------------------------------------------------------
function getIndianStandardTime() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    weekday: "long"
  });
  
  const parts = formatter.formatToParts(now);
  let hour = 0;
  let minute = 0;
  let weekday = "Monday";

  for (const part of parts) {
    if (part.type === "hour") hour = parseInt(part.value, 10);
    if (part.type === "minute") minute = parseInt(part.value, 10);
    if (part.type === "weekday") weekday = part.value;
  }

  // Handle midnight 24 hour edge cases if any
  if (hour === 24) hour = 0;

  return { hour, minute, weekday };
}

function updateLiveClinicStatus() {
  const { hour, minute } = getIndianStandardTime();
  const statusEl = document.getElementById("live-ist-status");
  const dotEl = document.getElementById("status-pulse-dot");

  if (!statusEl || !dotEl) return;

  const isOpen = (hour > CLINIC_CONFIG.operatingHours.openHour || 
                 (hour === CLINIC_CONFIG.operatingHours.openHour && minute >= CLINIC_CONFIG.operatingHours.openMinute)) && 
                 (hour < CLINIC_CONFIG.operatingHours.closeHour);

  if (isOpen) {
    dotEl.classList.remove("closed");
    statusEl.innerHTML = `<strong>OPD OPEN NOW</strong> • Today's Hours: 6:00 AM – 10:00 PM (IST)`;
  } else {
    dotEl.classList.add("closed");
    statusEl.innerHTML = `<strong>OPENS AT 6:00 AM</strong> • Emergency WhatsApp Active`;
  }
}

// -----------------------------------------------------------------------------
// 3. GOOGLE MAPS REAL BUSYNESS DATA & VISUALIZER
// -----------------------------------------------------------------------------
const GOOGLE_BUSYNESS_DATA = {
  Monday: {
    label: "Monday",
    headline: "Steady Morning • Peak Evening Demand",
    peakHours: "6:00 PM – 9:00 PM (Working professionals returning from Delhi/Noida offices)",
    fastestWindow: "11:00 AM – 4:00 PM & Early 6:00 AM – 8:00 AM (< 5 mins wait)",
    statusType: "peak-evening",
    densityBars: [20, 35, 55, 60, 45, 30, 25, 25, 30, 40, 75, 90, 85, 45, 30, 15] // 6 AM to 10 PM (16 hrs)
  },
  Tuesday: {
    label: "Tuesday",
    headline: "Fastest Zero-Wait Day of the Week",
    peakHours: "Minor peak 7:00 PM – 8:30 PM (Overall very smooth patient flow)",
    fastestWindow: "10:00 AM – 5:00 PM & 8:30 PM – 10:00 PM (Almost zero wait)",
    statusType: "zero-wait",
    densityBars: [15, 25, 35, 40, 35, 25, 20, 20, 25, 30, 50, 60, 55, 35, 20, 10]
  },
  Wednesday: {
    label: "Wednesday",
    headline: "Balanced Flow • Recommended Afternoon & Evening",
    peakHours: "7:00 PM – 8:30 PM",
    fastestWindow: "2:00 PM – 6:00 PM & 8:45 PM – 10:00 PM (< 10 mins wait)",
    statusType: "zero-wait",
    densityBars: [15, 30, 45, 50, 40, 25, 20, 20, 25, 35, 65, 70, 60, 40, 25, 10]
  },
  Thursday: {
    label: "Thursday",
    headline: "Active All Day • Senior & Family Checkups",
    peakHours: "10:30 AM – 1:00 PM & 6:30 PM – 8:30 PM",
    fastestWindow: "6:00 AM – 9:00 AM & 2:30 PM – 5:00 PM",
    statusType: "peak-allday",
    densityBars: [20, 40, 65, 75, 65, 40, 30, 30, 35, 50, 70, 80, 75, 50, 30, 15]
  },
  Friday: {
    label: "Friday",
    headline: "Morning Surge • Relaxed Night Slots",
    peakHours: "9:00 AM – 12:30 PM",
    fastestWindow: "1:30 PM – 5:00 PM & 8:30 PM – 10:00 PM",
    statusType: "zero-wait",
    densityBars: [20, 35, 60, 85, 70, 45, 30, 25, 30, 45, 65, 70, 60, 35, 20, 10]
  },
  Saturday: {
    label: "Saturday",
    headline: "Weekend Family Care • Active Daytime",
    peakHours: "10:00 AM – 3:00 PM (Family preventive checkups & child visits)",
    fastestWindow: "6:00 AM – 9:00 AM & 6:30 PM – 10:00 PM",
    statusType: "peak-day",
    densityBars: [25, 45, 70, 85, 80, 75, 65, 55, 50, 50, 60, 65, 55, 40, 25, 15]
  },
  Sunday: {
    label: "Sunday",
    headline: "Morning Peak Rush • Calm Evening Hours",
    peakHours: "9:00 AM – 1:30 PM (Heaviest walk-in window of the week)",
    fastestWindow: "2:30 PM – 5:00 PM & 7:30 PM – 10:00 PM (Recommended for fast visits)",
    statusType: "peak-morning",
    densityBars: [30, 60, 85, 95, 90, 80, 50, 40, 40, 45, 55, 60, 50, 40, 25, 15]
  }
};

function renderBusynessDay(dayKey) {
  const data = GOOGLE_BUSYNESS_DATA[dayKey];
  if (!data) return;

  // Update tabs
  document.querySelectorAll(".day-pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-day") === dayKey);
  });

  // Update content
  const titleEl = document.getElementById("busyness-day-title");
  const headlineEl = document.getElementById("busyness-day-headline");
  const peakEl = document.getElementById("busyness-peak-text");
  const fastestEl = document.getElementById("busyness-fastest-text");
  const badgeWrap = document.getElementById("busyness-badge-wrap");
  const barsWrap = document.getElementById("busyness-bars-row");

  if (titleEl) titleEl.innerText = `${data.label} Patient Flow Profile`;
  if (headlineEl) headlineEl.innerText = data.headline;
  if (peakEl) peakEl.innerText = data.peakHours;
  if (fastestEl) fastestEl.innerText = data.fastestWindow;

  if (badgeWrap) {
    if (data.statusType.includes("zero-wait")) {
      badgeWrap.innerHTML = `<span class="busyness-badge-pill zero-wait">⚡ Lowest Wait Window Recommended</span>`;
    } else {
      badgeWrap.innerHTML = `<span class="busyness-badge-pill peak">⚠️ Peak Demand Expected — Book Priority Slot</span>`;
    }
  }

  // Render hourly bars
  if (barsWrap) {
    const hours = ["6A", "7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"];
    barsWrap.innerHTML = data.densityBars.map((val, idx) => {
      const isHigh = val >= 70;
      const isLow = val <= 35;
      const barColor = isHigh ? "var(--color-danger)" : isLow ? "var(--color-action-primary)" : "var(--color-brand-primary)";
      return `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px;">
          <div style="width:100%; height:80px; background:var(--border-subtle); border-radius:4px; display:flex; align-items:flex-end; overflow:hidden;">
            <div style="width:100%; height:${val}%; background:${barColor}; border-radius:3px 3px 0 0; transition:height 300ms ease;"></div>
          </div>
          <span style="font-size:10px; font-weight:600; color:var(--text-muted);">${hours[idx]}</span>
        </div>
      `;
    }).join("");
  }
}

// -----------------------------------------------------------------------------
// 4. DEPARTMENT SELECTOR & PREFILL SYSTEM
// -----------------------------------------------------------------------------
function selectDepartmentForBooking(deptTarget) {
  const formSection = document.getElementById("appointment-section");
  const deptSelect = document.getElementById("patient-department");

  if (deptSelect && deptTarget) {
    const targetClean = deptTarget.toLowerCase().trim();
    let matchedIndex = -1;

    for (let i = 0; i < deptSelect.options.length; i++) {
      const opt = deptSelect.options[i];
      const optVal = opt.value.toLowerCase();
      const optTxt = opt.text.toLowerCase();

      if (opt.value === deptTarget || optVal.includes(targetClean) || targetClean.includes(optVal) || optTxt.includes(targetClean)) {
        matchedIndex = i;
        break;
      }
    }

    if (matchedIndex !== -1) {
      deptSelect.selectedIndex = matchedIndex;
    }
  }

  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
    // Visual flash highlight
    formSection.style.transition = "outline 200ms ease";
    formSection.style.outline = "3px solid var(--color-action-primary)";
    setTimeout(() => {
      formSection.style.outline = "none";
    }, 1500);
  }
}

// -----------------------------------------------------------------------------
// 5. CHUNKED WHATSAPP APPOINTMENT DISPATCHER
// -----------------------------------------------------------------------------
function handleAppointmentSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("patient-name");
  const phoneInput = document.getElementById("patient-phone");
  const deptSelect = document.getElementById("patient-department");
  const timeSelect = document.getElementById("patient-time-window");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const dept = deptSelect ? deptSelect.value : "General Consultation";
  const timeSlot = timeSelect ? timeSelect.value : "Immediate OPD Slot";

  if (!name) {
    alert("Please enter patient full name.");
    nameInput?.focus();
    return;
  }

  if (!phone || phone.length < 8) {
    alert("Please enter a valid mobile / WhatsApp number.");
    phoneInput?.focus();
    return;
  }

  const message = `Namaste Dr. Yash Kumar, I would like to book an OPD consultation at Yash Health Clinic (Sector 51 Noida).%0A%0A` +
    `• *Patient Name:* ${encodeURIComponent(name)}%0A` +
    `• *Contact Number:* ${encodeURIComponent(phone)}%0A` +
    `• *Department / Clinical Concern:* ${encodeURIComponent(dept)}%0A` +
    `• *Preferred Time Window:* ${encodeURIComponent(timeSlot)}%0A` +
    `• *Clinic Locality:* Gali No. 2, Hoshiyarpur, Sector 51 Noida%0A%0A` +
    `Please confirm the next available doctor slot. Thank you!`;

  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${message}`;

  // Open WhatsApp in new tab / app
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

// -----------------------------------------------------------------------------
// 6. ACCORDION CONTROLLER (ACCESSIBLE ARIA)
// -----------------------------------------------------------------------------
function initAccordion() {
  const triggers = document.querySelectorAll(".faq-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".faq-item");
      const isOpen = parent.classList.contains("open");

      // Close all others for single-expansion focus
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("open");
        const btn = item.querySelector(".faq-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        parent.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// -----------------------------------------------------------------------------
// 7. ASSET INITIALIZER & IMAGE FALLBACKS
// -----------------------------------------------------------------------------
function initClinicAssets() {
  const imageElements = {
    "asset-doctor-portrait": CLINIC_ASSETS.doctorPortrait || SVG_FALLBACKS.doctorPortrait,
    "asset-doctor-spotlight": CLINIC_ASSETS.doctorPortrait || SVG_FALLBACKS.doctorPortrait,
    "asset-clinic-exterior": CLINIC_ASSETS.clinicExterior || SVG_FALLBACKS.clinicExterior,
    "asset-consultation": CLINIC_ASSETS.consultationRoom || SVG_FALLBACKS.consultationRoom,
    "asset-pharmacy": CLINIC_ASSETS.pharmacyWing || SVG_FALLBACKS.pharmacyWing,
    "asset-nursing": CLINIC_ASSETS.nursingRoom || SVG_FALLBACKS.nursingRoom
  };

  Object.entries(imageElements).forEach(([elementId, src]) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.src = src;
      el.onerror = () => {
        // Fallback to SVG if external image fails
        const fallbackKey = elementId.replace("asset-", "").replace("doctor-portrait", "doctorPortrait").replace("doctor-spotlight", "doctorPortrait").replace("clinic-exterior", "clinicExterior").replace("consultation", "consultationRoom").replace("pharmacy", "pharmacyWing").replace("nursing", "nursingRoom");
        if (SVG_FALLBACKS[fallbackKey]) {
          el.src = SVG_FALLBACKS[fallbackKey];
        }
      };
    }
  });
}

// -----------------------------------------------------------------------------
// 8. MOBILE NAV DRAWER CONTROLLER
// -----------------------------------------------------------------------------
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    drawer.classList.toggle("open", !isOpen);
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close drawer on link click
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// -----------------------------------------------------------------------------
// INITIALIZATION ON DOM READY
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial clinic assets
  initClinicAssets();

  // 2. Live IST clock update
  updateLiveClinicStatus();
  setInterval(updateLiveClinicStatus, 30000); // 30-sec refresh

  // 3. Day of week busyness visualizer setup
  const { weekday } = getIndianStandardTime();
  const validDay = GOOGLE_BUSYNESS_DATA[weekday] ? weekday : "Monday";
  renderBusynessDay(validDay);

  // Bind day buttons
  document.querySelectorAll(".day-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      if (day) renderBusynessDay(day);
    });
  });

  // 4. Accordion setup
  initAccordion();

  // 5. Mobile Nav setup
  initMobileNav();

  // 6. Form listener
  const form = document.getElementById("appointment-dispatch-form");
  if (form) {
    form.addEventListener("submit", handleAppointmentSubmit);
  }
});
