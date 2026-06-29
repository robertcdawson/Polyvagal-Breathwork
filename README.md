# Polyvagal Breathwork App
A simple, clean, and interactive web-based application to guide your breathwork practice, based on principles of Polyvagal Theory. This tool helps you use your breath to calm your nervous system with guided animations, presets for established techniques, and customizable timers.

# Features
- Intuitive Visual Guide: A central circle fills and empties in sync with the breath cycle, providing a clear, intuitive visual pacer. Cyclic Sighing expands in two steps to guide the double inhale.

- Science-Backed Presets: Includes one-click presets for evidence-based techniques:

  - Cyclic Sighing (the double-inhale physiological sigh)

  - Extended Exhale Breathing

  - Box Breathing

  - Resonance Frequency Breathing

  - VOO (Humming) Breathing

- Smart Duration: Selecting a preset primes a timed session at its research-backed length in one tap (the Stanford cyclic sighing protocol is 5 minutes/day). You can still switch between Time and Cycles modes.

- Adjustable Resonance Rate: Tune resonance breathing from 4.5 to 6.5 breaths/min, or run the guided "find my resonance" sweep to discover the pace that feels smoothest.

- Fully Customizable: Manually adjust the duration (in seconds) for each phase of the breath cycle (Inhale, Hold In, Exhale, Hold Out); editing these switches to a custom pattern.

- Session Timer: Set a total duration for your practice, and the app will run until the time is complete.

- Optional Audio Cues: Gentle tones mark each phase, with a distinct cue for the second inhale of a cyclic sigh.

- Installable & Offline: Add it to your iPhone home screen (iOS Safari) for a fullscreen, app-like experience; a service worker keeps it working offline after the first load. The screen stays awake during a session and recovers the wake lock and audio if you switch away and return.

- Clean & Calming UI: A minimalist, mobile-friendly design with a soothing color palette and background helps you focus on your practice without distraction.

# How to Use
This is a self-contained web application. No installation or dependencies are required.

1. Save the Code: Copy the entire code into a new file and save it as index.html.

1. Open in Browser: Open the index.html file in any modern web browser (like Chrome, Firefox, Safari, or Edge).

1. Start Practicing:

  - Select a preset (this also sets its recommended session length) or set your custom timings.

  - Adjust the session duration if you want, and switch between Time and Cycles modes.

  - Press "Start" to begin the guided session.

## Add to Home Screen (iPhone / iOS Safari)
For a fullscreen, app-like experience: open the app in Safari, tap the Share button, then "Add to Home Screen." Launching from the home-screen icon hides the browser chrome, keeps the screen awake during sessions, and works offline after the first load.

# Breathwork Techniques Included 
- Cyclic Sighing (Physiological Sigh): A full inhale through the nose, a short second "top-up" inhale to fully fill the lungs, then a long, slow exhale through the mouth. The app guides the double inhale with a two-step expansion of the circle and a distinct second-inhale cue. In a randomized controlled trial (Balban et al., Cell Reports Medicine, 2023), five minutes a day of cyclic sighing produced the greatest improvements in mood and the largest reduction in respiratory rate of the techniques tested - more than mindfulness meditation.

- Extended Exhale: The foundational polyvagal technique to promote calm by making the exhale longer than the inhale (about a 1:2 ratio), which helps activate the parasympathetic (rest-and-digest) nervous system.

- Box Breathing: A classic technique for reducing stress and improving focus by making all phases of the breath cycle (inhale, hold, exhale, hold) equal in duration.

- Resonance Breathing: A method to maximize heart rate variability (HRV) by syncing your breath to a slow, calming rhythm. Your personal resonance frequency typically falls between 4.5 and 6.5 breaths/min; a fixed ~6 breaths/min (0.1 Hz) is a well-supported default. Use the in-app rate slider or the guided sweep to find yours.

- VOO Breath: This technique uses an extended exhale combined with humming a deep "voo" sound. The gentle vibration created by the hum helps stimulate the vagus nerve, deepening the relaxation response.

# How to Deploy
You can easily host this app for free on a public URL using any of these services:

- GitHub Pages: Create a new repository, upload this index.html file, and enable GitHub Pages in the repository settings.

- Netlify: Use Netlify Drop to drag-and-drop the index.html file for instant deployment.

- Vercel: Similar to Netlify, Vercel provides simple and free hosting for static sites.

# Technologies Used
- HTML5

- CSS3 (with Tailwind CSS for utility-first styling)

- JavaScript (Vanilla JS for all logic and animations)

# References
- Balban, M. Y., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 4(1), 100895. https://doi.org/10.1016/j.xcrm.2022.100895
- Shaffer, F., & Meehan, Z. M. (2020). A Practical Guide to Resonance Frequency Assessment for Heart Rate Variability Biofeedback. Frontiers in Neuroscience, 14, 570400. https://doi.org/10.3389/fnins.2020.570400

Disclaimer: This application is a tool for practice and is not intended as medical advice. Consult a healthcare professional for guidance on managing your health.
