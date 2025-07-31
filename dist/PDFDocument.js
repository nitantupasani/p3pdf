"use strict";

const React = require('react');
const {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} = require('@react-pdf/renderer');

// Register a font. You can include .ttf files in your project.
// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    color: '#333'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1a202c',
    fontFamily: 'Helvetica-Bold'
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    marginVertical: 30,
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
    paddingVertical: 20
  },
  scoreItem: {
    flex: 1
  },
  scoreTitle: {
    fontSize: 12,
    color: '#4a5568',
    marginBottom: 8
  },
  scoreValue: {
    fontSize: 32,
    color: '#2c5282',
    fontFamily: 'Helvetica-Bold'
  },
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Helvetica-Bold'
  },
  cardText: {
    fontSize: 11,
    lineHeight: 1.5
  }
});

// Create Document Component
const MyDocument = _ref => {
  let {
    data
  } = _ref;
  return /*#__PURE__*/React.createElement(Document, null, /*#__PURE__*/React.createElement(Page, {
    size: "A4",
    style: styles.page
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.header
  }, "Care Home Action Plan Summary"), /*#__PURE__*/React.createElement(View, {
    style: styles.scoresContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.scoreItem
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.scoreTitle
  }, "Protection Against Exposure"), /*#__PURE__*/React.createElement(Text, {
    style: styles.scoreValue
  }, data.protectionScore, "%")), /*#__PURE__*/React.createElement(View, {
    style: styles.scoreItem
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.scoreTitle
  }, "Values Score"), /*#__PURE__*/React.createElement(Text, {
    style: styles.scoreValue
  }, data.valuesScore, "%"))), data.categoryData.map((cat, index) => /*#__PURE__*/React.createElement(View, {
    key: index,
    style: styles.card
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.cardTitle
  }, cat.title), /*#__PURE__*/React.createElement(Text, {
    style: styles.cardText
  }, cat.recommendation)))));
};
module.exports = MyDocument;
