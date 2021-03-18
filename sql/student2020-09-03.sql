/*
 Navicat Premium Data Transfer

 Source Server         : boye
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : student

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 03/09/2020 13:31:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '招生老师id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '姓名',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '手机号码',
  `cardid` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '身份证号码',
  `mail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '邮箱',
  `sosperson` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '紧急联系人',
  `sosphone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '紧急联系人手机',
  `school` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '院校',
  `major` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '专业',
  `money` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '缴费金额',
  `ispay` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '是否缴费',
  `creattime` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '系统录入时间',
  `educationType` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '学历类型',
  `remarks` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1084 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (1016, '2', '小强', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '成人教育', '备注1');
INSERT INTO `students` VALUES (1017, '2', '小强啊', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '全日制大专', '备注2');
INSERT INTO `students` VALUES (1013, '2', '小强啊', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '计算机', '备注3');
INSERT INTO `students` VALUES (1012, '2', '小强', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '远程教育', '备注4');
INSERT INTO `students` VALUES (1011, '2', '小强啊', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '成人教育', '备注5');
INSERT INTO `students` VALUES (1010, '2', '小强', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '牡丹江师范学院', '计算机科学与技术', '8000', '待缴费', '2020年9月1日 15:40:29', '全日制大专', '备注6');
INSERT INTO `students` VALUES (1019, '1', '小明', '15145468788', '231002454879856535', '15154548787@163.com', '李大强', '15145468788', '温春农校', '经济学基础', '8000', '已缴费', '2020年9月1日 15:40:29', '计算机', '123');
INSERT INTO `students` VALUES (1082, '1', '小刚', '13535356464', '231554878796965656', '13535356464@163.com', '大纲', '13535356464', '温春农校', '经济学基础', '7', '待缴费', '2020年9月3日 11:44:9', '成人教育', '321321123');
INSERT INTO `students` VALUES (1083, '1', '1', '1', '1', '1', '1', '1', '牡丹江师范学院', '物理学', '1', '待缴费', '2020年9月3日 11:52:27', '成人教育', '2');
INSERT INTO `students` VALUES (1081, '2', '1', '2', '3', '4', '5', '6', '温春农校', '植物学', '7', '待缴费', '2020年9月3日 11:42:40', '全日制大专', '8');
INSERT INTO `students` VALUES (1080, '0', '6', '6', '6', '6', '6', '6', '温春农校', '统计实用技术', '6', '待缴费', '2020年9月3日 11:26:25', '全日制大专', '6');
INSERT INTO `students` VALUES (1079, '0', '1', '2', '3', '4', '5', '6', '牡丹江师范学院', '物理学', '7', '待缴费', '2020年9月3日 10:52:36', '全日制大专', '8');

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `userpwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `tname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES (1, 'wang', '123', '王老师');
INSERT INTO `teachers` VALUES (2, 'li', '123', '李老师');
INSERT INTO `teachers` VALUES (0, 'admin', 'admin', '管理员');

SET FOREIGN_KEY_CHECKS = 1;
