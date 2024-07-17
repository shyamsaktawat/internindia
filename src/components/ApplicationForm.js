import React, { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { FaFile, FaCode, FaTerminal, FaCog, FaUser, FaEnvelope, FaPhone, FaImage, FaChevronDown, FaFolder, FaFolderOpen, FaReact } from 'react-icons/fa';
import './ApplicationForm.css';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    image: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeFolder, setActiveFolder] = useState('src');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/submit-application', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ fullName: '', email: '', phone: '', image: null });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      alert('There was an error submitting your application. Please try again.');
    }
  };
   
  const renderForm = () => (
    <form onSubmit={handleSubmit} className="application-form">
      
      
      <div className="form-group indent-2">
        <label htmlFor="fullName" className="token property"><FaUser /> fullName:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="token string"
          placeholder="'John Doe'"
        />
      </div>
      <div className="form-group indent-2">
        <label htmlFor="email" className="token property"><FaEnvelope /> email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="token string"
          placeholder="'john@example.com'"
        />
      </div>
      <div className="form-group indent-2">
        <label htmlFor="phone" className="token property"><FaPhone /> phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="token number"
          placeholder="1234567890"
        />
      </div>
      <div className="form-group indent-2">
        <label htmlFor="image" className="token property"><FaImage /> image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          className="token function"
        />
      </div>
      <div className="indent-2">
        <button type="submit" className="submit-btn token keyword">Submit Application</button>
      </div>
      
    </form>
  );
  const renderSidebar = () => (
    <div className={`ide-sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="ide-sidebar-header">
        <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}>
          {isSidebarExpanded ? <FaChevronDown /> : <FaChevronDown className="rotate-icon" />}
        </button>
        <span>EXPLORER</span>
      </div>
      <div className="ide-sidebar-content">
        <div className="folder">
          <div className="folder-header" onClick={() => setActiveFolder(activeFolder === 'src' ? '' : 'src')}>
            {activeFolder === 'src' ? <FaFolderOpen /> : <FaFolder />} src
          </div>
          {activeFolder === 'src' && (
            <div className="folder-content">
              <div className="file active"><FaReact /> ApplicationForm.js</div>
              <div className="file"><FaCode /> ApplicationForm.css</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderCodeContent = () => (
    <div className="code-content">
      <div className="code-line">
        <span className="token keyword">:root</span> {'{'}
      </div>
      <div className="code-line">
        <span className="token property">--vscode-bg:</span> <span className="token value">#1e1e1e;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-sidebar-bg:</span> <span className="token value">#252526;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-sidebar-header:</span> <span className="token value">#333333;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-tab-bg:</span> <span className="token value">#2d2d2d;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-tab-active-bg:</span> <span className="token value">#1e1e1e;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-text:</span> <span className="token value">#d4d4d4;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-input-bg:</span> <span className="token value">#3c3c3c;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-border:</span> <span className="token value">#474747;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-highlight:</span> <span className="token value">#0e639c;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-success:</span> <span className="token value">#4ec9b0;</span>
      </div>
      <div className="code-line">
        <span className="token property">--vscode-line-number:</span> <span className="token value">#858585;</span>
      </div>
      <div className="code-line">{'}'}</div>
      <div className="code-line">&nbsp;</div>
      <div className="code-line">
        <span className="token selector">.vs-code-container</span> {'{'}
      </div>
      <div className="code-line">
        <span className="token property">margin-top:</span> <span className="token value">40pt;</span>
      </div>
      <div className="code-line">
        <span className="token property">display:</span> <span className="token value">flex;</span>
      </div>
      <div className="code-line">
        <span className="token property">height:</span> <span className="token value">calc(100vh - 60px);</span> <span className="token comment">/* Adjust based on your header */</span>
      </div>
      <div className="code-line">
        <span className="token property">font-family:</span> <span className="token value">'Consolas', 'Courier New', monospace;</span>
      </div>
      <div className="code-line">
        <span className="token property">background-color:</span> <span className="token value">var(--vscode-bg);</span>
      </div>
      <div className="code-line">
        <span className="token property">color:</span> <span className="token value">var(--vscode-text);</span>
      </div>
      <div className="code-line">{'}'}</div>
      {/* ... more styled code content ... */}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      
        case 'form':
          return renderForm();// Instead of the form, we're showing styled code
        case 'preview':
          return (
            <div className="preview-container">
              <h3>Form Data Preview</h3>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          );
        case 'console':
          return (
            <div className="console-container">
              <div className="console-header">
                <span>Console</span>
                <button onClick={() => console.clear()}>Clear</button>
              </div>
              <div className="console-output">
                <p> Application form loaded successfully.</p>
                <p> Waiting for user input...</p>
              </div>
            </div>
          );
        default:
          return null;
      }
  };

  return (
    <Layout>
      <div className="vs-code-container">
        {renderSidebar()}
        <div className="vs-code-main">
          <div className="vs-code-tabs">
            <div className={`vs-code-tab ${activeTab === 'form' ? 'active' : ''}`} onClick={() => setActiveTab('form')}>
              <FaCode /> ApplicationForm.css
            </div>
            <div className={`vs-code-tab ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>
              <FaCode /> Preview.json
            </div>
            <div className={`vs-code-tab ${activeTab === 'console' ? 'active' : ''}`} onClick={() => setActiveTab('console')}>
              <FaTerminal /> Console
            </div>
          </div>
          <div className="vs-code-content">
            <div className="vs-code-line-numbers">
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i + 1} className="line-number">{i + 1}</div>
              ))}
            </div>
            <div className="vs-code-editor">
              {renderTabContent()}
            </div>
          </div>
          <div className="vs-code-status-bar">
            <div className="vs-code-status-bar-left">
              <span className="vs-code-status-bar-item">Ready</span>
            </div>
            <div className="vs-code-status-bar-right">
              <span className="vs-code-status-bar-item">Ln 1, Col 1</span>
              <span className="vs-code-status-bar-item">Spaces: 2</span>
              <span className="vs-code-status-bar-item">UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ApplicationForm;