import React, { useEffect, useState } from 'react';
import ReviewView from '../reviewView/ReviewView';
import { StyledReviewArrowButton, StyledReviews } from './Reviews.style';
import reviewsData from '../../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sliderTimeout = setTimeout(() => {
      callbacks.nextReview();
    }, 5000);
    return () => clearTimeout(sliderTimeout);
  }, [index]);

  const callbacks = {
    nextReview: () => {
      if (index === reviews.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    },
    previousReview: () => {
      if (index === 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(index - 1);
      }
    },
  };
  return (
    <StyledReviews>
      {reviews.map((review, reviewIndex) => {
        if (reviewIndex === index) {
          return <ReviewView active={true} key={review.id} {...review} />;
        } else if (
          reviewIndex === index - 1 ||
          (index === 0 && reviewIndex === reviews.length - 1)
        ) {
          return (
            <ReviewView
              active={false}
              nextSlide={false}
              prevSlide={true}
              key={review.id}
              {...review}
            />
          );
        } else if (
          reviewIndex === index + 1 ||
          (index === reviews.length - 1 && reviewIndex === 0)
        ) {
          return (
            <ReviewView
              active={false}
              nextSlide={true}
              prevSlide={false}
              key={review.id}
              {...review}
            />
          );
        }
        return <ReviewView active={false} key={review.id} {...review} />;
      })}
      <StyledReviewArrowButton className="right" onClick={callbacks.nextReview}>
        <FiChevronRight />
      </StyledReviewArrowButton>
      <StyledReviewArrowButton
        className="left"
        onClick={callbacks.previousReview}
      >
        <FiChevronLeft />
      </StyledReviewArrowButton>
    </StyledReviews>
  );
}
