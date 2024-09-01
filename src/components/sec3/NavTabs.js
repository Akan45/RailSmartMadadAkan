import React, { useState } from 'react';

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState('train');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <ul className="nav nav-tabs nav-justified tabNav r-tabs-nav" id="myTab">
      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'train' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="train"
          onClick={() => handleTabChange('train')}
          data-toggle="tab"
          href="#traincomp"
          role="tab"
          aria-controls="home"
          aria-selected={activeTab === 'train'}
          className={`r-tabs-anchor ${activeTab === 'train' ? 'active show' : ''}`}
        >
          <span className="icon icon1 sprite"></span>
          <font className="TrainComplaint">Train</font>
        </a>
      </li>

      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'station' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="station"
          onClick={() => handleTabChange('station')}
          data-toggle="tab"
          href="#stationcomp"
          role="tab"
          aria-controls="profile"
          aria-selected={activeTab === 'station'}
          className="r-tabs-anchor"
        >
          <span className="icon icon2 sprite"></span>
          <font className="StationComplaint">Station</font>
        </a>
      </li>

      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'railanubh' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="railanubh-tab"
          onClick={() => handleTabChange('railanubh')}
          data-toggle="tab"
          href="#railanubh"
          role="tab"
          aria-controls="railanubh"
          aria-selected={activeTab === 'railanubh'}
          className="r-tabs-anchor"
        >
          <span className="icon icon5 sprite"></span>
          <font className="RailAnubhav">Appreciation/<br />Rail Anubhav</font>
        </a>
      </li>

      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'freightparcel' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="freightparcel-tab"
          onClick={() => handleTabChange('freightparcel')}
          data-toggle="tab"
          href="#freightparcel"
          role="tab"
          aria-controls="freightparcel"
          aria-selected={activeTab === 'freightparcel'}
          className="r-tabs-anchor"
        >
          <span className="icon icon3 sprite"></span>
          <font className="FPTab">Enquiry</font>
        </a>
      </li>

      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'track' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="track-tab"
          onClick={() => handleTabChange('track')}
          data-toggle="tab"
          href="#track"
          role="tab"
          aria-controls="contact"
          aria-selected={activeTab === 'track'}
          className="r-tabs-anchor"
        >
          <span className="icon icon4 sprite"></span>
          <font className="TrackComplaint">Track Your Concern</font>
        </a>
      </li>

      <li
        style={{ width: '100%' }}
        className={`r-tabs-tab ${activeTab === 'suggestions' ? 'r-tabs-state-active' : 'r-tabs-state-default'}`}
      >
        <a
          id="suggestions-tab"
          onClick={() => handleTabChange('suggestions')}
          data-toggle="tab"
          href="#suggestions"
          role="tab"
          aria-controls="suggestions"
          aria-selected={activeTab === 'suggestions'}
          className="r-tabs-anchor"
        >
          <span className="icon icon5 sprite"></span>
          <font className="Suggestion">Suggestions</font>
        </a>
      </li>

      <li>
        <a
          id="suggestions-tab"
          onClick={() => handleTabChange('suggestions')}
          data-toggle="tab"
          href="#suggestions"
          role="tab"
          aria-controls="suggestions"
          aria-selected={activeTab === 'suggestions'}
          className="r-tabs-anchor"
        >
          <span className="icon icon5 sprite"></span>
          Your<br />Suggestions
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;
