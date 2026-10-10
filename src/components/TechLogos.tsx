import React from 'react';

export const PytorchLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M13.2 2.2a9.6 9.6 0 0 0-5.5 2.5 9.7 9.7 0 0 0-3 6.9c0 5 3.8 9.1 8.8 9.5a9.7 9.7 0 0 0 9.6-9.6c0-2.6-1-5.1-2.9-6.9l-1.4 1.4a7.7 7.7 0 0 1 2.3 5.5 7.7 7.7 0 0 1-7.7 7.7 7.7 7.7 0 0 1-7.7-7.7c0-3.6 2.5-6.6 6-7.5l-1.5-1.8zm3.3 4a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0z"
      fill="#EE4C2C"
    />
  </svg>
);

export const HuggingFaceLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" fill="#FFD21E" />
    <circle cx="8.5" cy="10.5" r="1.5" fill="#111" />
    <circle cx="15.5" cy="10.5" r="1.5" fill="#111" />
    <path d="M8 14.5c1.2 2 4.8 2 8 0" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 14c1.5-1 3-0.5 4 1" stroke="#FF9D00" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 14c-1.5-1-3-0.5-4 1" stroke="#FF9D00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const VllmLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="6" fill="#0D1117" />
    <path
      d="M5 6L10.5 18H13.5L19 6H15.5L12 14.2L8.5 6H5Z"
      fill="url(#vllm-gradient)"
    />
    <circle cx="12" cy="8" r="1.5" fill="#22D3EE" />
    <defs>
      <linearGradient id="vllm-gradient" x1="5" y1="6" x2="19" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.5" stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
  </svg>
);

export const DockerLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M4 11h2.5v2H4v-2zm3 0h2.5v2H7v-2zm3 0h2.5v2H10v-2zm3 0h2.5v2H13v-2zm-3-3h2.5v2H10V8zm3 0h2.5v2H13V8zm-6 0h2.5v2H7V8zm6-3h2.5v2H13V5z"
      fill="#2496ED"
    />
    <path
      d="M22.5 12.5c-.3-.2-1.4-.4-2-.2-.2-.8-.7-1.4-1.4-1.7l-.5-.2-.3.4c-.6.9-.7 2-.5 3-1.2.8-3.1.9-4.8.9H2.8c-.3.9-.3 2.5.3 3.5 1.2 2 3.8 3.3 7.4 3.3 6.4 0 10.7-3.4 11.8-7.9.6 0 1.2-.2 1.6-.7l.3-.4-.7-.5z"
      fill="#2496ED"
    />
  </svg>
);

export const LangChainLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="6" fill="#141E1E" />
    <path
      d="M6 14.5A2.5 2.5 0 0 1 8.5 12h2a2.5 2.5 0 0 1 0 5h-2A2.5 2.5 0 0 1 6 14.5zm7.5-5a2.5 2.5 0 0 1 2.5-2.5h2a2.5 2.5 0 0 1 0 5h-2A2.5 2.5 0 0 1 13.5 9.5zm-4 2.5h5"
      stroke="#2BD67B"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const CudaLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="6" fill="#76B900" />
    <path
      d="M6 7h12v2H6V7zm0 4h8v2H6v-2zm0 4h12v2H6v-2z"
      fill="#000000"
    />
    <circle cx="17" cy="12" r="1.5" fill="#000" />
  </svg>
);

export const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12v.5H5.8S2 5 2 8.4s3.3 3.3 3.3 3.3h1v-1.6c0-1.8 1.6-1.8 1.6-1.8h3.1c1.5 0 1.5-1.5 1.5-1.5V3.5s.4-1.5-2.6-1.5zm-1.7 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22c3.3 0 3.1-1.4 3.1-1.4l0-1.5h-3.2v-.5h6.2s3.8.4 3.8-3-3.3-3.3-3.3-3.3h-1v1.6c0 1.8-1.6 1.8-1.6 1.8h-3.1c-1.5 0-1.5 1.5-1.5 1.5v3.3s-.4 1.5 2.6 1.5zm1.7-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z"
      fill="#FFD43B"
    />
  </svg>
);
