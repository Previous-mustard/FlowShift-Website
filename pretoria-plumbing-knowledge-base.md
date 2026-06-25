# KNOWLEDGE BASE — Pretoria Plumbing Solutions

> Reference content for Lena. The agent looks this up when a caller's question needs
> it. Behaviour and call flow live in the SYSTEM PROMPT, not here. The two are
> swapped together as a pair when deploying for a new client.

---

## BUSINESS DETAILS

- **Business name:** Pretoria Plumbing Solutions
- **Trade:** Plumbing
- **Owner first name:** Pieter
- **Owner contact number:** +27 82 555 0147
- **Service area:** Pretoria East, Pretoria North, Pretoria West, Centurion, Midrand,
  Waterkloof, Brooklyn, Hatfield, Menlo Park, Lynnwood, Moreleta Park, Garsfontein,
  Faerie Glen, Montana
- **Working hours (owner on site):** Monday to Friday 7am–5pm, Saturday 8am–1pm
- **AI receptionist hours:** 24/7

---

## SERVICES OFFERED

One line each. Used to confirm job types and to answer "do you do X?".

- **Burst pipe repair** — emergency and non-emergency bursts, indoor and outdoor,
  including garden reticulation.
- **Geyser repair and replacement** — fault-finding, element replacement, full
  replacement; all brands.
- **Blocked drains** — kitchen, bathroom, and storm drains, including hydrojetting
  for severe blockages.
- **Leak detection** — concealed leaks in walls and under floors.
- **Tap and toilet repairs** — washers, cistern repairs, full fixture replacement.
- **Municipal water connection issues** — incoming main line, meter isolation,
  pressure problems.
- **Solar geyser installation and maintenance** — new installs and retrofits.
- **Plumbing compliance certificates** — for property transfers requiring a plumbing
  certificate of compliance.

> Swap this list per client at deployment.

---

## SERVICES NOT OFFERED

Stops the agent implying capability the business doesn't have.

- No gas plumbing or gas appliance installation.
- No electrical work.
- No commercial or industrial properties.
- No electrical certificates of compliance.

If a caller asks for one of these, don't promise it — take a message for Pieter to
advise, or note that he can refer them on.

---

## PRICING POLICY

The business never quotes over the phone. All quotes are done on site (or on a call
with Pieter) after the job is assessed. There's no charge for Pieter to come and look.
If pressed:

"I genuinely can't quote over the phone — it depends what Pieter finds on site. He'll
give you a full quote before he starts any work, and there's no charge for the visit."

---

## REGISTRATION / CERTIFICATION

Pretoria Plumbing Solutions is PIRB-registered (Plumbing Industry Registration Board),
registration number PIRB-2019-04412, and a member of IOPSA (Institute of Plumbing South
Africa). If a caller asks, give the registration in general terms and offer to have
Pieter confirm specifics on the callback.

---

## FREQUENTLY ASKED QUESTIONS

Answer in the agent's own voice; keep to the wording below where given.

- **How soon can someone come out?** "Let me check availability now — we can often
  get to you same day or next day. I'll see what's open."
- **Do you work weekends?** "Yes — Pieter works Saturdays 8am to 1pm. Let me check what's available."
- **Do you guarantee your work?** "That's one for Pieter — book the job and you can
  ask him directly when he's out."
- **Are you registered / certified?** See REGISTRATION above.
- **Do you use genuine parts?** "I'd need Pieter to confirm that for your specific job
  — I don't want to promise something I'm not certain of. Shall I book it so you can
  ask him?"
- **Can I get a rough price?** See PRICING above.
- **What areas do you cover?** Don't recite the list. Ask which suburb they're in and
  match it (see system prompt): "Whereabouts are you — which suburb? Let me check we
  cover it."
- **How do I know the booking's confirmed?** "Pieter has your details straight after
  the call." [Add once SMS is live: "You'll also get an SMS confirmation on this
  number."]
- **Can I reschedule or cancel?** "Yes — just call this number and I'll update it, or
  call Pieter directly on 082 555 0147."
- **I've used you before — can I speak to Pieter?** "He's out on jobs right now. I can
  take your details and have him call you back, or book something in if you need work
  done."
- **Load-shedding on the day of the booking?** "Pieter works through load-shedding
  where he can — it depends on the job. He'll be in touch if there's a delay on the
  day."
- **Insurance work / reports for claims?** "Pieter can advise on that — I'll flag it in
  the booking notes so he raises it with you."

> Add or adjust Q&As per client. Aim for 10–15 covering the trade's most common calls.

---

## LOAD-SHEDDING — REFERENCE

Load-shedding (Eskom's rotating outages, stages 1–8 across different suburbs at
different times) is normal context in Gauteng — don't treat a mention of it as
unusual.

It is only an emergency when the power event has caused **damage, a fault, or a safety
hazard** — a surge when power returned, a DB board that won't reset, a dead inverter
after an outage. Routine load-shedding (the caller is just waiting for power to return)
is **not** an emergency. The decision rules are in the system prompt's EMERGENCY
ROUTING section. If unsure, ask whether there's any damage or safety issue.

---

## CALL-NOTES TEMPLATE

Structure the notes field for book_appointment and leave_message like this:

```
CALLER:         [full name]
NUMBER:         [contact number]
ADDRESS:        [full address, suburb]
JOB:            [plain-English description]
URGENCY:        [Routine / Urgent / Emergency escalated]
PREFERRED TIME: [as stated by caller]
BOOKED SLOT:    [confirmed datetime, if booked]
NOTES:          [anything extra — existing customer, area needs confirming,
                 special access, insurance query, etc.]
```

---

> **Per-client deployment:** replace the business details, services, service area,
> registration, and FAQ specifics. The system prompt and this knowledge base are
> swapped together as a matched pair.
