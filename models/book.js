'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
  class Book extends Sequelize.Model {
  Book.init({
    title: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
      validate: {
        notNull: {
          msg: 'Please provide a value for "Title"',
        },
        notEmpty: {
          msg: 'Please provide a value for "Title"',
        }
      },
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
      validate: {
        notNull: {
          msg: 'Please provide a value for "Author"',
        },
        notEmpty: {
          msg: 'Please provide a value for "Author"',
        }
      },
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
      validate: {
        notNull: {
          msg: 'Please provide a value for "Author"',
        },
        notEmpty: {
          msg: 'Please provide a value for "Author"',
        }
      },
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false, // disallow null
      defaultValue: false, // set default value
    },
  },  {sequelize});

  return Book;
};
