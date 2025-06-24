import React, { useRef, useEffect, useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

const PortfolioSwiper = ({ items }) => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [clonedItems, setClonedItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [visibleCount, setVisibleCount] = useState(1);

  // Drag support refs
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

  // Responsive visibleCount based on screen width
  useEffect(() => {
    if (screenWidth < 500) setVisibleCount(1);
    else if (screenWidth < 768) setVisibleCount(1);
    else if (screenWidth < 1024) setVisibleCount(1);
    else if (screenWidth < 1280) setVisibleCount(1);
    else setVisibleCount(1);
  }, [screenWidth]);

  // Clone items for infinite loop
  useEffect(() => {
    const cloneHead = items.slice(0, visibleCount);
    const cloneTail = items.slice(-visibleCount);
    setClonedItems([...cloneTail, ...items, ...cloneHead]);
    setIndex(visibleCount);
  }, [items, visibleCount]);

  // Scroll to current index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const total = items.length;
    const realStartIndex = visibleCount;
    const realEndIndex = total + visibleCount;

    if (index < realStartIndex) {
      setTimeout(() => {
        container.scrollTo({ left: slideWidth() * (total + index), behavior: 'auto' });
        setIndex(total + index);
      }, 300);
      return;
    }

    if (index >= realEndIndex) {
      setTimeout(() => {
        container.scrollTo({ left: slideWidth() * visibleCount, behavior: 'auto' });
        setIndex(visibleCount);
      }, 300);
      return;
    }

    container.scrollTo({ left: slideWidth() * index, behavior: 'smooth' });
  }, [index, items.length, visibleCount]);

  // Auto scroll when not hovered
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
                screenWidth < 500 ? '99%' :
               screenWidth < 768 ? '99%' :
               screenWidth < 1024 ? '70%' :
               screenWidth < 1200 ? "70%" :
               screenWidth < 1280 ? '70%' : '75%',
        margin: 'auto',
        padding: '2rem',
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
            key={i}
            style={{
              flex: `0 0 ${100 / visibleCount}%`,
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

      <style>{`
        .carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <IoChevronBackOutline
      className='arrow-back'
        onClick={prev}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          color: '#305CDE',
          fontSize: 30,
        }}
      />
      <MdArrowForwardIos
      className='arrow-front'
        onClick={next}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          color: '#305CDE',
          fontSize: 30,
        }}
      />

      <div style={{ textAlign: 'center', marginTop: 10 }}>
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i + visibleCount)}
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              margin: '0 5px',
              borderRadius: '50%',
              background: (index - visibleCount) % items.length === i ? '#305CDE' : '#ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSwiper;
