Good. Now I can match the landing page to your actual brand. Let me update the prompt.

---

## Updated Landing Page Cursor Prompt

```
Build a stunning, production-grade landing page for "Convaire" — an AI-powered outbound voice calling platform for real estate businesses. The page has one primary goal: get real estate businesses to join a waiting list.

Match the exact brand identity of the platform shown in the design reference.

---

## BRAND IDENTITY (match exactly)

Logo: Blue square icon with "Convaire" wordmark + "AI Calling Platform" tagline below in small text — same as sidebar

Typography:
- UI font: Same clean sans-serif used in the dashboard (use "Inter" from Google Fonts)
- No decorative display fonts — this is a clean, professional B2B product

Color Palette (exact values from brand guide):
--primary: #1a8ee9
--primary-hover: #0b5b9a
--sidebar: #0f172a
--card-dark: #1e293b
--accent-cyan: #00bcd4
--white: #ffffff
--bg-light: #f1f5f9
--text-primary: #0f172a
--text-muted: #64748b
--border: #e2e8f0
--success: #22c55e
--warning: #f59e0b
--danger: #ef4444

Style: Clean, light, professional SaaS. White/light gray backgrounds with blue accents. Same aesthetic as the dashboard — not dark luxury, not startup gradient overload. Think enterprise-grade B2B tool.

---

## PAGE SECTIONS

### 1. NAVBAR
- Left: Blue square logo icon + "Convaire" bold + "AI Calling Platform" subtitle in muted text (exact match to sidebar logo)
- Right: "Join Waitlist" button (#1a8ee9 filled, white text, rounded)
- White background, bottom border #e2e8f0
- Sticky with subtle box-shadow on scroll

### 2. HERO SECTION
Light gray background (#f1f5f9), full viewport height.

Left side (55%):
- Badge above headline: pill shape, light blue bg, blue text — "Now in Early Access"
- Main headline (Inter, bold, 56px):
  "The AI That Calls
  Your Real Estate
  Clients For You"
- Subheadline (muted, 18px):
  "Upload your client list, create a campaign, and let Zara — your AI voice agent — call, pitch projects, handle objections, and book site visits. In Urdu and English."
- Inline waitlist form: email input (white, border #e2e8f0) + "Join Waiting List" button (#1a8ee9)
- Below form: row of 5 avatar initials circles (blue tones) + "200+ businesses on the waitlist"

Right side (45%):
- Exact replica of the dashboard UI as a mockup — show the dashboard card layout
- White card with shadow, slightly tilted (3deg rotation)
- Show: stat cards row (Total Clients, Active Campaigns, Calls Today, Leads This Week)
- Below: mini line chart labeled "Calls Per Day"
- Floating badge top-right of card: "Live" with green pulsing dot
- Floating mini card bottom-left: "47 Leads Today ↑" in green

### 3. HOW IT WORKS
White background.
Section label: "HOW IT WORKS" (small caps, #1a8ee9, letter-spaced)
Section title: "From Client List to Booked Visit in 3 Steps"

Three steps horizontal, connected by dashed blue line:

Step 1: Upload Clients
- Icon: people/upload icon (blue)
- "Import your contact list via CSV or add manually. Tag by location, interest, or property type."

Step 2: Launch a Campaign
- Icon: megaphone/campaign icon
- "Create a campaign for any project — Imaarat, Giga Mall, any society. Set calling hours, language, and let Zara handle the rest."

Step 3: Get Leads & Bookings
- Icon: chart/lead icon
- "Every call is logged. Interested clients become leads automatically. Site visits get booked during the call."

Step style: number badge (blue circle), icon, title, description. Cards with white bg, border, hover shadow lift.

### 4. DASHBOARD PREVIEW (full width)
Light gray bg (#f1f5f9).
Section title: "Everything You Need in One Dashboard"
Subtitle: "Track campaigns, monitor calls, manage leads and appointments — all in real time."

Show a large, wide screenshot-style mockup of the dashboard:
- Recreate the exact layout from the reference image
- Sidebar on left (dark navy #0f172a) with menu items: Dashboard, Clients, Client Lists, Campaigns, Leads, Call Logs, Phone Numbers, Appointments, Settings
- Main area with stat cards and charts
- White card, rounded corners, large shadow
- Slight perspective tilt (transform: perspective(1000px) rotateX(3deg))

Below the mockup, 3 feature highlights in a row:
- "Real-Time Stats" — track every call as it happens
- "Smart Lead Detection" — AI auto-tags interested prospects
- "Full Transcripts" — every conversation saved and searchable

### 5. FEATURES GRID
White background.
Section title: "Built for Real Estate, Not Generic Sales"
6 cards in 3x2 grid:

1. AI Voice Agent "Zara" — Speaks fluent Urdu and English, handles objections naturally
2. Outbound Campaigns — Call hundreds of clients with a single trigger
3. Auto Lead Capture — Interest detected from conversation, leads created instantly
4. Site Visit Booking — Zara schedules visits during the call, no human needed
5. Call Transcripts & Recordings — Full record of every conversation
6. Multi-Project Support — Run separate campaigns for each property project

Card style: white bg, #e2e8f0 border, blue icon top-left, hover: border turns #1a8ee9, subtle shadow lift. Same card style as the dashboard.

### 6. STATS BAR
Full-width #0f172a dark navy background (matching sidebar).
4 stats in a row, white text, centered:

- "300+" — Calls Per Hour
- "2 Languages" — Urdu & English
- "24/7" — Always On
- "< 2 min" — Avg Call Duration

Dividers between stats. Clean, minimal.

### 7. TESTIMONIAL
White bg.
Large blue quotation mark (decorative).
Quote (placeholder, mark as TODO):
"We ran a campaign for our new housing society and got 63 qualified leads in a single day. Zara handled the calls better than we expected — even in Urdu."
— Usman Malik, Sales Director, [Real Estate Company]

Blue horizontal line above quote. Author avatar circle with initials.

### 8. WAITLIST CTA SECTION
Background: #1a8ee9 (primary blue, full width).
White text throughout.

- Headline: "Be the First to Launch AI Calling for Your Business"
- Subtext: "Limited early access spots. Get 3 months free when we launch."
- Form: Name + Email + Phone + "Join Waitlist" button (white bg, blue text)
- Below: "No credit card required · We'll contact you personally · Early access pricing locked in"
- 3 trust icons: Lock (Secure), Bell (No Spam), Tag (Early Access Pricing)

### 9. FOOTER
Dark navy (#0f172a) background, white text.
- Logo left (white version)
- Tagline: "AI voice campaigns for real estate businesses."
- Links: Privacy Policy, Terms of Service (placeholder)
- Copyright: "© 2026 Convaire. All rights reserved."
- Social: LinkedIn + Instagram icons, white, hover turns #1a8ee9

---

## ANIMATIONS

- Hero headline: words fade up staggered (animation-delay, 100ms per word)
- Dashboard mockup: slow floating (CSS keyframes, 6s up/down, subtle)
- Stat cards in hero: count up from 0 when page loads (JS counter)
- Feature cards: fade up on scroll (IntersectionObserver, 60ms stagger)
- How it works connecting line: draws in on scroll
- Stats bar numbers: count up on scroll into view
- Navbar: adds box-shadow on scroll
- All buttons: scale(1.02) + darken on hover, 150ms ease
- "Live" badge on dashboard mockup: green dot pulses continuously

---

## WAITLIST FORM BEHAVIOR

- Validate: name required, valid email format, phone min 10 digits
- Button shows "Joining..." with spinner during submit
- On success: slide down form, slide up:
  "You're on the list! We'll reach out soon." with blue checkmark
- Show running count: "Join [X] others already waiting" — increment on each local submit
- Store in localStorage (no backend needed yet)

---

## TECHNICAL REQUIREMENTS

- Single HTML file, embedded CSS and JS only
- No frameworks, no build tools
- Google Fonts: Inter (weights 400, 500, 600, 700, 800)
- Fully responsive — mobile first
- Mobile: hero stacks vertically, dashboard mockup scales down, 3 steps go vertical, feature grid goes 1 column
- Max content width: 1200px centered
- Section padding: 96px top/bottom desktop, 64px mobile
- All border-radius: 12px for cards (matching dashboard)
- Box shadows matching dashboard: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)

---

## WHAT MAKES IT MEMORABLE

The hero shows the actual dashboard UI as a live mockup — visitors immediately recognize this is a real, built product not a vaporware promise. The dark navy stats bar breaks the light sections with authority. The blue CTA section at the bottom is impossible to miss.
```