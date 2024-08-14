import React from 'react';

export default function Portfolio() {
    const applications = [
        {
            name: "Text Editor PWA",
            url: "https://text-editor-w8n2.onrender.com/",
            description: "A simple text editor PWA built with React.",
            repo: "https://github.com/JustindHolderman/Text_Editor"
        },
        {
            name: "Weather Dashboard",
            url: "https://justindholderman.github.io/weather-dashboard/",
            description: "A weather dashboard utilizing server side API.",
            repo: "https://github.com/JustindHolderman/weather-dashboard",
        },
        {
            name: "Kanban Board",
            url: "https://justindholderman.github.io/kanban/",
            description: "A kanban board for task management.",
            repo: "https://github.com/JustindHolderman/kanban",
        },
    ];

    const Cards = applications.map((app, i) => (
        <div key={i} className="card">
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a href={app.url} target="_blank" rel="noreferrer">View Application</a>
            <a href={app.repo} target="_blank" rel="noreferrer">View Repository</a>
        </div>
    ));

    return (
        <div className="portfolio">
            {Cards}
        </div>
    );
}
