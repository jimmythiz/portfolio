import React, { useRef, useEffect, useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

const Carousel = ({ items, visibleCount = 1 }) => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(visibleCount);
  const [clonedItems, setClonedItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Drag support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slideWidth = () => containerRef.current?.offsetWidth / visibleCount;

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive visibleCount
  useEffect(() => {
    if (screenWidth < 500) setVisibleCount(1);
    else if (screenWidth < 768) setVisibleCount(1);
    else if (screenWidth < 1024) setVisibleCount(1);
    else if (screenWidth < 1280) setVisibleCount(1);
    else setVisibleCount(1);
  }, [screenWidth]);

  const [visibleCountState, setVisibleCount] = useState(visibleCount);

  // Clone items for seamless loop
  useEffect(() => {
    const cloneHead = items.slice(0, visibleCountState);
    const cloneTail = items.slice(-visibleCountState);
    setClonedItems([...cloneTail, ...items, ...cloneHead]);
    setIndex(visibleCountState);
  }, [items, visibleCountState]);

  // Scroll to the current index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const total = items.length;
    const realStartIndex = visibleCountState;
    const realEndIndex = total + visibleCountState;

    if (index < realStartIndex) {
      setTimeout(() => {
        container.scrollTo({ left: slideWidth() * (total + index), behavior: 'auto' });
        setIndex(total + index);
      }, 300);
      return;
    }

    if (index >= realEndIndex) {
      setTimeout(() => {
        container.scrollTo({ left: slideWidth() * visibleCountState, behavior: 'auto' });
        setIndex(visibleCountState);
      }, 300);
      return;
    }

    container.scrollTo({ left: slideWidth() * index, behavior: 'smooth' });
  }, [index, items.length, visibleCountState]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Drag handlers
  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = (e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const x = (e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const next = () => setIndex(prev => prev + 1);
  const prev = () => setIndex(prev => prev - 1);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',

        width: screenWidth < 390 ? '98%' :
                screenWidth < 500 ? '95%' :
               screenWidth < 768 ? '90%' :
               screenWidth < 1024 ? '70%' :
               screenWidth < 1200 ? "70%" :
               screenWidth < 1280 ? '50%' : '45%',
        margin: 'auto',
        padding: '2rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="carousel"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={onDrag}
        onTouchMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchEnd={stopDrag}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {clonedItems.map((item, i) => (
          <div
            className="cardss"
            key={i}
            style={{
              flex: `0 0 ${100 / visibleCountState}%`,
              scrollSnapAlign: 'start',
              borderRadius: 10,
              userSelect: 'none',
              padding: '2rem',
              textAlign: 'center',
              margin: '1rem',
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <style>
        {`
          .carousel::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <IoChevronBackOutline
        onClick={prev}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          color: '#305CDE',
          fontSize: 30
        }}
      />
      <MdArrowForwardIos
        onClick={next}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          color: '#305CDE',
          fontSize: 30
        }}
      />

      <div style={{ textAlign: 'center', marginTop: 10 }}>
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i + visibleCountState)}
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              margin: '0 5px',
              borderRadius: '50%',
              background: (index - visibleCountState) % items.length === i ? '#305CDE' : '#ccc',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
