import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const BottomDrawer = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startY, setStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY - startY;
      setCurrentY((prevY) => Math.max(0, prevY + deltaY));
      setStartY(e.clientY); // Update startY to the current cursor position
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (currentY > 30) {
      onClose();
    }
    setCurrentY(0);

  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const deltaY = e.touches[0].clientY - startY;
      setCurrentY((prevY) => Math.max(0, prevY + deltaY));
      setStartY(e.touches[0].clientY); // Update startY to the current touch position
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (currentY > 30) {
      onClose();
    }
    setCurrentY(0);

  };

  const handleOutsideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, currentY, isOpen]);

  if (!isVisible) return null;


  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
    >
      <div
        ref={drawerRef}
        // onMouseDown={handleMouseDown}
        // onTouchStart={handleTouchStart}
        // onTransitionEnd={handleTransitionEnd}
        // onDoubleClick={(e) => e.preventDefault()}
        style={{
          transform: `translateY(${isOpen ? currentY : 100}%)`,
          transition: dragging ? 'none' : 'transform 0.3s ease',
        }}
        className={`bg-[#101323] overflow-y-scroll h-2/3 border-t-2 border-gray-500 text-white p-6 w-full mx-auto rounded-t-lg transform ${isOpen ? 'translate-y-0' : 'translate-y-full'
          } transition-transform duration-300 select-none`}
      >
        {children}
        <div className="flex justify-center mt-2">
          <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BottomDrawer;
