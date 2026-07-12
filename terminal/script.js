/* ============================================================
   Mohith Chukkala — terminal portfolio behaviour
   ============================================================ */
(function () {
    'use strict';

    var root = document.documentElement;
    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Theme toggle ---------- */
    (function theme() {
        var toggle = document.getElementById('theme-toggle');
        var saved = localStorage.getItem('term-theme');
        if (saved === 'light') {
            root.setAttribute('data-theme', 'light');
            toggle.textContent = '◑';
        }
        toggle.addEventListener('click', function () {
            var isLight = root.getAttribute('data-theme') === 'light';
            if (isLight) {
                root.removeAttribute('data-theme');
                toggle.textContent = '◐';
                localStorage.setItem('term-theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                toggle.textContent = '◑';
                localStorage.setItem('term-theme', 'light');
            }
        });
    })();

    /* ---------- Smooth scroll for in-page command links ---------- */
    function scrollToId(id) {
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    document.querySelectorAll('a[data-cmd]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = a.getAttribute('href') || '';
            if (href.charAt(0) === '#') {
                e.preventDefault();
                scrollToId(href.slice(1));
                history.replaceState(null, '', href);
            }
        });
    });

    /* ---------- Scroll-spy (highlight active nav command) ---------- */
    (function spy() {
        var links = Array.prototype.slice.call(
            document.querySelectorAll('.topbar-nav a[href^="#"]'));
        var map = {};
        links.forEach(function (l) {
            var id = l.getAttribute('href').slice(1);
            if (document.getElementById(id)) map[id] = l;
        });
        if (!('IntersectionObserver' in window)) return;
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    links.forEach(function (l) { l.classList.remove('active'); });
                    if (map[entry.target.id]) map[entry.target.id].classList.add('active');
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        Object.keys(map).forEach(function (id) {
            obs.observe(document.getElementById(id));
        });
    })();

    /* ---------- Reveal-on-scroll ---------- */
    (function reveal() {
        var items = document.querySelectorAll('.block, .neofetch');
        if (reduceMotion || !('IntersectionObserver' in window)) {
            items.forEach(function (el) { el.classList.add('revealed'); });
            return;
        }
        var obs = new IntersectionObserver(function (entries, o) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        items.forEach(function (el) { obs.observe(el); });
    })();

    /* ============================================================
       Interactive terminal
       ============================================================ */
    var typedEl  = document.getElementById('typed');
    var cursorEl = document.getElementById('heroCursor');
    var outEl    = document.getElementById('termOut');
    var inputLine = document.getElementById('inputLine');
    var input    = document.getElementById('termInput');

    var LINKS = {
        resume:   'https://drive.google.com/file/d/1JzvMD7DW_4iOLso-iG8HjpsI_U0zLI6x/view?usp=sharing',
        github:   'https://github.com/mohithchukkala',
        linkedin: 'https://linkedin.com/in/chukkala-mohith',
        leetcode: 'https://leetcode.com/u/mohith_chukkala/',
        email:    'mailto:mohith2007.chukkala@gmail.com'
    };

    function row(html, cls) {
        var div = document.createElement('div');
        div.className = 'row' + (cls ? ' ' + cls : '');
        div.innerHTML = html;
        outEl.appendChild(div);
        return div;
    }
    function echo(cmd) {
        var div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = '<span class="prompt">visitor@mohith</span>' +
            '<span class="sep">:</span><span class="cwd">~</span>' +
            '<span class="dollar">$</span> ';
        div.appendChild(document.createTextNode(cmd)); // user text — safe
        outEl.appendChild(div);
    }
    function openLink(url) {
        window.open(url, '_blank', 'noopener');
    }

    var COMMANDS = {
        help: function () {
            row('available commands:', 'head');
            row('&nbsp; <span class="key">about</span> &nbsp; <span class="key">education</span> &nbsp; <span class="key">skills</span> &nbsp; <span class="key">projects</span> &nbsp; <span class="key">achievements</span> &nbsp; <span class="key">contact</span>');
            row('&nbsp; <span class="key">resume</span> &nbsp; <span class="key">github</span> &nbsp; <span class="key">linkedin</span> &nbsp; <span class="key">leetcode</span> &nbsp; <span class="key">email</span>');
            row('&nbsp; <span class="key">classic</span> (old design) &nbsp; <span class="key">clear</span> &nbsp; <span class="key">help</span>');
        },
        about: function () {
            row('Mohith Chukkala — B.Tech in AI &amp; Data Science @ IIITDM Kurnool (4th sem).');
            row('Loves building clean web apps &amp; solving problems (150+ DSA solved).');
            row('<span class="comment">↓ scrolling to about…</span>'); scrollToId('about');
        },
        education: function () { row('<span class="comment">↓ scrolling to education…</span>'); scrollToId('education'); },
        skills:    function () { row('<span class="comment">↓ scrolling to skills…</span>'); scrollToId('skills'); },
        projects:  function () { row('<span class="comment">↓ scrolling to projects…</span>'); scrollToId('projects'); },
        achievements: function () { row('<span class="comment">↓ scrolling to achievements…</span>'); scrollToId('achievements'); },
        contact:   function () { row('<span class="comment">↓ scrolling to contact…</span>'); scrollToId('contact'); },
        resume:    function () { row('<span class="ok">opening resume in a new tab…</span>'); openLink(LINKS.resume); },
        github:    function () { row('<span class="ok">opening GitHub…</span>'); openLink(LINKS.github); },
        linkedin:  function () { row('<span class="ok">opening LinkedIn…</span>'); openLink(LINKS.linkedin); },
        leetcode:  function () { row('<span class="ok">opening LeetCode…</span>'); openLink(LINKS.leetcode); },
        email:     function () { row('<span class="ok">opening mail client…</span>'); openLink(LINKS.email); },
        classic:   function () { row('<span class="ok">loading classic portfolio…</span>'); setTimeout(function () { window.location.href = '../classic/'; }, 350); },
        whoami:    function () { row('Mohith Chukkala — AI &amp; Data Science · aspiring software engineer.'); },
        ls:        function () { COMMANDS.projects(); },
        clear:     function () { outEl.innerHTML = ''; },
        sudo:      function () { row('nice try — permission denied 😉 (you already have full access, just scroll!)', 'err'); }
    };
    var ALIASES = { edu: 'education', cv: 'resume', proj: 'projects', work: 'projects', goals: 'achievements', '?': 'help' };

    function run(raw) {
        var cmd = raw.trim().toLowerCase();
        if (!cmd) return;
        echo(raw.trim());
        if (ALIASES[cmd]) cmd = ALIASES[cmd];
        if (COMMANDS[cmd]) {
            COMMANDS[cmd]();
        } else {
            row('command not found: ' + escapeHtml(cmd) + ' — type <span class="key">help</span>', 'err');
        }
        outEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    }
    function escapeHtml(s) {
        return s.replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* ---------- command history ---------- */
    var history_ = [];
    var hIndex = -1;
    if (input) {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var val = input.value;
                if (val.trim()) { history_.push(val.trim()); hIndex = history_.length; }
                run(val);
                input.value = '';
            } else if (e.key === 'ArrowUp') {
                if (history_.length) { hIndex = Math.max(0, hIndex - 1); input.value = history_[hIndex]; e.preventDefault(); }
            } else if (e.key === 'ArrowDown') {
                if (history_.length) {
                    hIndex = Math.min(history_.length, hIndex + 1);
                    input.value = history_[hIndex] || '';
                    e.preventDefault();
                }
            }
        });
    }

    /* ---------- boot: auto-type `whoami` then activate prompt ---------- */
    function activate() {
        COMMANDS.whoami();
        if (cursorEl) cursorEl.classList.add('hide');
        if (inputLine) inputLine.hidden = false;
    }
    function bootType() {
        var text = 'whoami';
        if (reduceMotion) { typedEl.textContent = text; activate(); return; }
        var i = 0;
        (function step() {
            if (i <= text.length) {
                typedEl.textContent = text.slice(0, i);
                i++;
                setTimeout(step, 95);
            } else {
                setTimeout(activate, 260);
            }
        })();
    }
    if (typedEl) {
        // small delay so the page settles before typing starts
        setTimeout(bootType, 500);
    }
})();
