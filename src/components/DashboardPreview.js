// src/components/DashboardPreview.js
import React from 'react';
import './DashboardPreview.css';

function DashboardPreview() {
    return (
        <section className="dashboard-preview">
            <div className="dashboard-stats">
                <h3>Stats for Olivia Rhye</h3>
                <p>Profile views</p>
                <img src="path_to_graph_image" alt="Profile views graph" />
            </div>
            <div className="dashboard-chat">
                <h4>Anita Cruz</h4>
                <p>Dashboard Design Brief.pdf</p>
                <p>800 KB</p>
            </div>
        </section>
    );
}

export default DashboardPreview;
