
const { useState, useContext, useRef, useEffect } = React;

// ── Data (generated from source spreadsheet) ───────────────────────────────────
const DOWNLOAD_DATA = [
  {
    "id": "master",
    "cat": "善導大師",
    "groups": [
      {
        "b": "電子檔",
        "sections": [
          {
            "c": "善導十德",
            "files": [
              "善導十德電子檔 https://drive.google.com/file/d/1MFxwneQD0V1eEIoQs3endj2eZWaMJR9G/view?usp=drive_link"
            ]
          }
        ]
      },
      {
        "b": "音檔",
        "sections": [
          {
            "c": "善導十德",
            "files": [
              "善導十德第一集音檔 https://drive.google.com/file/d/1vRaUjjgv-gRs89WQh7ymHgMT_YficJon/view?usp=drive_link",
              "善導十德第二集音檔 https://drive.google.com/file/d/1iv_1psChdv-TPvU9TCsdtk3-KUcMT2NX/view?usp=drive_link"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "lectures",
    "cat": "法音宣講",
    "groups": [
      {
        "b": "影片",
        "sections": [
          {
            "c": "何故號阿彌陀佛",
            "files": []
          },
          {
            "c": "佛自來迎",
            "files": []
          },
          {
            "c": "《往生禮讚》-行門",
            "files": [
              "《往生禮讚》共修-地鐘念佛15分鐘影片 https://drive.google.com/file/d/1YuR-aax5qqpi4GLvUY83IWkCSCWVjxLF/view?usp=drive_link"
            ]
          }
        ]
      },
      {
        "b": "音檔",
        "sections": [
          {
            "c": "《觀經要義》",
            "files": [
              "01-1 觀經要義_第01集-1_音檔 https://drive.google.com/file/d/12LqnfHMMYYqrQUeTwcamwpZAhTsLXypb/view?usp=drive_link",
              "01-2 觀經要義_第01集-2_音檔 https://drive.google.com/file/d/1NZg2ffqLWUHFtdKXdc13Kdl442z7-VWR/view?usp=drive_link",
              "02-1 觀經要義_第02集-1_音檔 https://drive.google.com/file/d/13GgHAA33t2fk71l6KE6TM-rjatelpqyu/view?usp=drive_link",
              "02-2 觀經要義_第02集-2_音檔 https://drive.google.com/file/d/1bgsoMYXKNt9FvfczgPG8rStoL_xJKRhB/view?usp=drive_link",
              "03-1 觀經要義_第03集-1_音檔 https://drive.google.com/file/d/1zo2G-Mo2bw0z-q7Y4zVR4QrFHok8T9-h/view?usp=drive_link",
              "03-2 觀經要義_第03集-2_音檔 https://drive.google.com/file/d/1Qc2dgvGq3-OCE1m9wZRP2kAoGmYTLBYR/view?usp=drive_link",
              "04-1 觀經要義_第04集-1_音檔 https://drive.google.com/file/d/1Ya2VUUSh3jd-SlAJp8scZP7_7H1Peet-/view?usp=drive_link",
              "04-2 觀經要義_第04集-2_音檔 https://drive.google.com/file/d/1OCWmc0XVaeWgA1Q43FONYsmNYKLuUdL-/view?usp=drive_link",
              "05-1 觀經要義_第05集-1_音檔 https://drive.google.com/file/d/17Hmqfg_xOl9y7QF4WHpbEEC32pCQVeqs/view?usp=drive_link",
              "05-2 觀經要義_第05集-2_音檔 https://drive.google.com/file/d/19V1bk2vBvwJZRVho8wlEcUbz3tdePpQd/view?usp=drive_link",
              "06-1 觀經要義_第06集-1_音檔 https://drive.google.com/file/d/1IE_625zRRO2gdXF74vS8l1zqVSrzDoku/view?usp=drive_link",
              "06-2 觀經要義_第06集-2_音檔 https://drive.google.com/file/d/1TRU5ZFHtlXH5dmF2wV3foU06Jb3gjb-W/view?usp=drive_link",
              "07-1 觀經要義_第07集-1_音檔 https://drive.google.com/file/d/1vuTN2INgIJ0_v4HMRknxLNNdgQmkIx9Z/view?usp=drive_link",
              "07-2 觀經要義_第07集-2_音檔 https://drive.google.com/file/d/1CyNshOsWziiDv06so9OEH23Vr7fcAX7R/view?usp=drive_link",
              "08-1 觀經要義_第08集-1_音檔 https://drive.google.com/file/d/1anC5ahwSA6a0Xw_hHwrK5-fZr9omzJLN/view?usp=drive_link",
              "08-2 觀經要義_第08集-2_音檔 https://drive.google.com/file/d/1sc9_xnK_Lz3pXx966gE3l2UhJEAUi8nL/view?usp=drive_link",
              "09-1 觀經要義_第09集-1_音檔 https://drive.google.com/file/d/1h75_C1vfIDoCFZpGNxWtbCTrCHxcDZa7/view?usp=drive_link",
              "09-2 觀經要義_第09集-2_音檔 https://drive.google.com/file/d/1mGQV0H4wA65BLUZeVu2lNu9WwGJdUEX_/view?usp=drive_link",
              "10-1 觀經要義_第10集-1_音檔 https://drive.google.com/file/d/1rRotnJhVuFkKNRv0d5uJDSOj5ZohJHft/view?usp=drive_link",
              "10-2 觀經要義_第10集-2_音檔 https://drive.google.com/file/d/1aZZT2ivX-nZKk8yk3QpmIKF4Jb-OAami/view?usp=drive_link",
              "11-1 觀經要義_第11集-1_音檔 https://drive.google.com/file/d/1wYsvXHnvRd1C6N5FGmuiUFQesQwy0F-R/view?usp=drive_link",
              "11-2 觀經要義_第11集-2_音檔 https://drive.google.com/file/d/1ud5J1fIpq3h7IJraeyKg-I8p1m15FyqZ/view?usp=drive_link",
              "12-1 觀經要義_第12集-1_音檔 https://drive.google.com/file/d/1f1_A5DjjZKFExlixqH0flSw7IvOa8KQe/view?usp=drive_link",
              "12-2 觀經要義_第12集-2_音檔 https://drive.google.com/file/d/1poFXftRx2i_4juHBMINPAR_LoT8yWkkA/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》功德利益",
            "files": [
              "《往生禮讚》功德利益-第1集音檔 https://drive.google.com/file/d/1-ZEID-ss-SZU1eOOVeo8ZJHg97UcTxBH/view?usp=drive_link",
              "《往生禮讚》功德利益-第2集音檔 https://drive.google.com/file/d/18hzyr_FmKpDznvkrrKZQVwuqiqNaAfPe/view?usp=drive_link",
              "《往生禮讚》功德利益-第3集音檔 https://drive.google.com/file/d/1ObsWQ067iluWyyytZM72DMgP5-UM4H4C/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》-行門",
            "files": [
              "12《往生禮讚》禮讚第一、二時音檔(完整)-湛淨法師帶領音檔 https://drive.google.com/file/d/13QV-mh2FqpNN7fLYuUo_C7ZMYS6N_Jzx/view?usp=drive_link",
              "13《往生禮讚》禮讚第一、三時音檔(完整)-湛淨法師帶領音檔 https://drive.google.com/file/d/1M99tCm_9JkkKbpxM0JLIx26JmIDgESjz/view?usp=drive_link",
              "14《往生禮讚》禮讚第一、四時音檔(完整)-湛淨法師帶領音檔 https://drive.google.com/file/d/1lMRsJ6VIeliQaKQXKoDCK1cwHcrIhNK_/view?usp=drive_link",
              "15《往生禮讚》禮讚第一、五時音檔(完整)-湛淨法師帶領音檔 https://drive.google.com/file/d/1Q94Gt7x2jrVdB4Vimtuhb5dFrDIkCcP7/view?usp=drive_link",
              "16《往生禮讚》禮讚第一、六時音檔(完整)-湛淨法師帶領音檔 https://drive.google.com/file/d/1PZUMG8-uOJ4E94FaELE_fH5iJhAPok1X/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》",
            "files": [
              "01-《往生禮讚》開示-第01集音檔 https://drive.google.com/file/d/125vJFE4sH_o2uUTUQFesz8kZ8nReD0RM/view?usp=drive_link",
              "02-《往生禮讚》開示-第02集音檔 https://drive.google.com/file/d/1X-vwjqC2-_mHdf5penqTly2nKQh984bF/view?usp=drive_link",
              "03-《往生禮讚》開示-第03集音檔 https://drive.google.com/file/d/1JzIrcT6MXt5KpDas43-AYpgKbzX8as_g/view?usp=drive_link",
              "04-《往生禮讚》開示-第04集音檔 https://drive.google.com/file/d/1TrXg1BYZRgD3pPZB_uQm2QNnKMatzd0z/view?usp=drive_link",
              "05-《往生禮讚》開示-第05集音檔 https://drive.google.com/file/d/1sKirCtpM55MzXjdRUws_nww8cJHnYUx-/view?usp=drive_link",
              "06-《往生禮讚》開示-第06集音檔 https://drive.google.com/file/d/1KpHg161_ztWCoWuQWMbcP4XQNgxnzaGk/view?usp=drive_link",
              "07-《往生禮讚》開示-第07集音檔 https://drive.google.com/file/d/1zLh253A1ZvXB4iiP7g9JvOWPwhd3aGrW/view?usp=drive_link",
              "08-《往生禮讚》開示-第08集音檔 https://drive.google.com/file/d/1dXM2X66Lti15kllZ6vOf_kDAxUshKhb3/view?usp=drive_link",
              "09-《往生禮讚》開示-第09集音檔 https://drive.google.com/file/d/17WCihvHSCH91-_GwkSCEy-A1SqE7VCc0/view?usp=drive_link",
              "10-《往生禮讚》開示-第10集音檔 https://drive.google.com/file/d/1T1nvZi1VzCRjSyxiqY_w0L8SU_hiNdbo/view?usp=drive_link",
              "11-《往生禮讚》開示-第11集音檔 https://drive.google.com/file/d/1tU7JD_f1RfppKLDFOpeB1GBqKaKL3eB-/view?usp=drive_link",
              "12-《往生禮讚》開示-第12集音檔 https://drive.google.com/file/d/1XAtQx71vEa0P1a7wmczKxiQ-n9w3dNOF/view?usp=drive_link",
              "13-《往生禮讚》開示-第13集音檔 https://drive.google.com/file/d/1qxtoqcQhjyWTBkye6LgbRP41MWZsVij4/view?usp=drive_link",
              "14-《往生禮讚》開示-第14集音檔 https://drive.google.com/file/d/14REa36nYGtqskgPhP_WxLHugjIVs1O7W/view?usp=drive_link",
              "15-《往生禮讚》開示-第15集音檔 https://drive.google.com/file/d/1DeXC1AjeZRM23qs0Gq5kg9TFa-1Rt-rG/view?usp=drive_link",
              "16-《往生禮讚》開示-第16集音檔 https://drive.google.com/file/d/1MD2uVv8h2daMdBYH9PFogo_AZDnxN3pz/view?usp=drive_link",
              "17-《往生禮讚》開示-第17集音檔 https://drive.google.com/file/d/1NNyCCSG_yR07tmAl3sZo8yp0yUUByfpY/view?usp=drive_link",
              "18-《往生禮讚》開示-第18集音檔 https://drive.google.com/file/d/1v0dQtOEX-Q3aX7aYdAEzm2UKqIjXxn9r/view?usp=drive_link",
              "19-《往生禮讚》開示-第19集音檔 https://drive.google.com/file/d/1r78nmZmP9gXIK5wkJnfJKaa7FmxZk7HL/view?usp=drive_link",
              "20-《往生禮讚》開示-第20集音檔 https://drive.google.com/file/d/1Aa40MYxSFcBE3HhhyIaWae2EGNVtcC1t/view?usp=drive_link",
              "21-《往生禮讚》開示-第21集音檔 https://drive.google.com/file/d/1hNIpJBK80dVopcD-99dxXGXgBBfJ0Xsu/view?usp=drive_link",
              "22-《往生禮讚》開示-第22集音檔 https://drive.google.com/file/d/1d9DlsN-ySKrg72-AKE2wVyilopTQJrMW/view?usp=drive_link",
              "23-《往生禮讚》開示-第23集音檔 https://drive.google.com/file/d/1Gd5rKWY-rj0-6jUT4sXpU1wnaZJP1eZM/view?usp=drive_link",
              "24-《往生禮讚》開示-第24集音檔 https://drive.google.com/file/d/1PsZ2vIBjXJspv-MMgx4bBSggJL_raIyC/view?usp=drive_link",
              "25-《往生禮讚》開示-第25集音檔 https://drive.google.com/file/d/159uEMjQICb1acQ_Z3zVMYsUK45kGelQs/view?usp=drive_link"
            ]
          }
        ]
      },
      {
        "b": "圖檔",
        "sections": [
          {
            "c": "偈頌法語",
            "files": [
              "偈頌法語01圖檔 https://drive.google.com/file/d/1Z4zX-vyAEanva60yHQ57yoHfhHrMEVlr/view?usp=drive_link",
              "偈頌法語02圖檔 https://drive.google.com/file/d/1KCSAOs0kMwbcz7SPPd5Ko7cxWr32Z5hv/view?usp=drive_link",
              "偈頌法語03圖檔 https://drive.google.com/file/d/12pLqUu9ql9rSCSAglvPdO2OWV_FV1XhI/view?usp=drive_link",
              "偈頌法語04圖檔 https://drive.google.com/file/d/1h2iGQyh350qmU5KkJ0TrjYW6v6VuqGs0/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》-行門",
            "files": [
              "《往生禮讚》共修流程圖檔 https://drive.google.com/file/d/18QJcFur-Le95mfPW-jV6hGVVXlZ_FUUy/view?usp=drive_link"
            ]
          }
        ]
      },
      {
        "b": "電子檔",
        "sections": [
          {
            "c": "《觀經要義》補充講義",
            "files": [
              "12-3 諸佛護念（附48諸佛護念補充講義整理）電子檔 https://drive.google.com/file/d/127PNSjytg-KWnqX3P9G3AB3-7CgY2RLH/view?usp=drive_link",
              "觀經要義補充講義--內文(全)-更新版電子檔 https://drive.google.com/file/d/1f01nz5Tf1wYrL0NjCybtBv1hrKqBURMO/view?usp=drive_link",
              "觀經要義補充講義--目錄(全部)電子檔 https://drive.google.com/file/d/1VUcXvq7-NmcIu_19A5wlyrWGkwazKhtT/view?usp=drive_link",
              "觀經要義補充講義-(全)-第一版電子檔 https://drive.google.com/file/d/1d3m6SDGRDvnKeexZukkdeRHU0thW2Jt7/view?usp=drive_link",
              "觀經要義補充講義-封面(全)電子檔 https://drive.google.com/file/d/1QHQOrPK_2aW22t8w6OQNut94Igp_eDfH/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》功德利益",
            "files": [
              "《往生禮讚》課程進度表電子檔 https://drive.google.com/file/d/1B6CDnX4SolPqnEmoEaF0WqDMjDVBAMwe/view?usp=drive_link",
              "《往生禮讚》功德利益-講義-第一集電子檔 https://drive.google.com/file/d/1J8NySp7K1TEWdz2_BMW5KRhTyLNgkCuR/view?usp=drive_link",
              "《往生禮讚》課本p241~244電子檔 https://drive.google.com/file/d/1wu13iS5xesE1HxFuTKZAtxIZSHQJ8TGG/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》-行門",
            "files": [
              "1-第一時一彌陀十二光名(白色卡)電子檔 https://drive.google.com/file/d/18vxa9fMzuynJi2uOwJiPII_Vvjy9NF-k/view?usp=drive_link",
              "3-懺悔、勸請、隨喜、迴向、發願、三皈依(粉紅色卡)電子檔 https://drive.google.com/file/d/1tAE0NBFnpTYZCkIqjkI6r9qsgSb_ubYL/view?usp=drive_link",
              "5-六時警策偈(綠色卡)電子檔 https://drive.google.com/file/d/1LReF-wbLVy3sIy5_6YSuAQAhqZMomK1t/view?usp=drive_link"
            ]
          },
          {
            "c": "《往生禮讚》",
            "files": [
              "《往生禮讚》課程進度表電子檔 https://drive.google.com/file/d/1z82_huqMFu1gPwlwftMFeeeScTgPRVoF/view?usp=drive_link",
              "《往生禮讚》課本電子檔 https://drive.google.com/file/d/1q224rWSEriqDksfp8newIMZ56nn0Bn8I/view?usp=drive_link",
              "《往生禮讚》必得往生電子檔 https://drive.google.com/file/d/1bBl0Pe_e0fYYCcdJzSyybHvYWi94e6uK/view?usp=drive_link",
              "《往生禮讚》上課講義--附1至附10電子檔 https://drive.google.com/file/d/1YbgXj46VPFFu8k5Vr0N7HKsnALYGNc8Q/view?usp=drive_link"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "lizan",
    "cat": "禮讚教學",
    "groups": [
      {
        "b": "影片",
        "sections": [
          {
            "c": "《往生禮讚》禮讚教學",
            "files": [
              "20260402_大悲精舍_往生禮讚_大檔影片 https://drive.google.com/file/d/19vHHlo7GFh_jKX7pMYTXmXgH3ldNvWJ5/view?usp=drive_link",
              "20260402_大悲精舍_往生禮讚_小檔影片 https://drive.google.com/file/d/1vgD9o5JiCP2exXjQrZtcjBfmg41z378x/view?usp=drive_link",
              "20260428_大悲精舍_往生禮讚_小檔_簡體影片 https://drive.google.com/file/d/1D0Mj5mQl7bShE_yjD8eocQ9PoKSVw4Jt/view?usp=drive_link",
              "20260428_大悲精舍_往生禮讚_大檔_簡體影片 https://drive.google.com/file/d/1Fg1dogKRZ5MuECtZthrwbl93F6qY29wP/view?usp=drive_link"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "erhe",
    "cat": "二河圖賞析",
    "groups": [
      {
        "b": "電子檔",
        "sections": [
          {
            "c": "《二河白道》文字解說",
            "files": [
              "0-1《二河白道》文字解說 20241021電子檔 https://drive.google.com/file/d/1yxoBslFgJW14MqV7PIWPznbYpwm0aW6p/view?usp=drive_link",
              "0-2《二河白道》原文電子檔 https://drive.google.com/file/d/1gNlv09YTEPhd_yV8YgLSpfC-XotuRgXs/view?usp=drive_link"
            ]
          }
        ]
      },
      {
        "b": "圖檔",
        "sections": [
          {
            "c": "二河白道全圖",
            "files": [
              "1-1 二河白道全圖-大悲精舍圖檔 https://drive.google.com/file/d/1Kdk2JuUiRyp8-w5KcAo-co4ypxfhK4YP/view?usp=drive_link",
              "1-2 圖檔 https://drive.google.com/file/d/1CrFmavdDoXeVVINryC5OQgsjPulmbcl1/view?usp=drive_link",
              "1-3 圖檔 https://drive.google.com/file/d/1u0Z9d0C985NQpL6RtqJzJ7Ny-5D7aK5l/view?usp=drive_link",
              "1-4 圖檔 https://drive.google.com/file/d/1720Hcrq3mZTy_sQHXMz49d4Ukote1_-h/view?usp=drive_link",
              "1-5 圖檔 https://drive.google.com/file/d/18HYw1WfEy6xVZvbrM-k8xy30MxQ5dCz6/view?usp=drive_link",
              "1-6 圖檔 https://drive.google.com/file/d/1buQovW0HPsveuWmNaUT0_5dyiz4IJO9N/view?usp=drive_link",
              "1-7 圖檔 https://drive.google.com/file/d/1cZ7QHgOY1wtUT5NdPruTY_Yw22ATmbJc/view?usp=drive_link"
            ]
          }
        ]
      }
    ]
  }
];
window.DOWNLOAD_DATA = DOWNLOAD_DATA;

const EN_SUB = {
  master:   'Master Shandao \u00b7 The Ten Virtues',
  lectures: 'Dharma Lectures \u00b7 Audio & Video',
  lizan:    'Lizan Practice \u00b7 Teaching Videos',
  erhe:     'Two Rivers & the White Path',
};
const TYPE_EN = { '\u5f71\u7247': 'Video', '\u97f3\u6a94': 'Audio', '\u5716\u6a94': 'Images', '\u96fb\u5b50\u6a94': 'Documents' };

// English labels for section (column C) names, keyed by the Chinese title.
const SECTION_EN = {
  '善導十德': 'The Ten Virtues of Master Shandao',
  '何故號阿彌陀佛': 'Why the Name “Amitābha”',
  '佛自來迎': 'The Buddha Comes to Welcome',
  '《往生禮讚》-行門': 'Wangsheng Lizan · Practice',
  '《觀經要義》': 'Guanjing Yaoyi · Essentials',
  '《往生禮讚》功德利益': 'Wangsheng Lizan · Merits & Benefits',
  '《往生禮讚》': 'Wangsheng Lizan · Praise for Rebirth',
  '偈頌法語': 'Verses & Dharma Sayings',
  '《觀經要義》補充講義': 'Guanjing Yaoyi · Supplementary Notes',
  '《往生禮讚》禮讚教學': 'Wangsheng Lizan · Teaching',
  '《二河白道》文字解說': 'Two Rivers & White Path · Explanation',
  '二河白道全圖': 'Two Rivers & White Path · Full Diagram',
};
window.SECTION_EN = SECTION_EN;

// ── Helpers ─────────────────────────────────────────────────────────────────────
function parseFile(str) {
  const idx = str.indexOf('https://');
  if (idx === -1) return { title: str.trim(), url: null };
  return { title: str.slice(0, idx).trim(), url: str.slice(idx).trim() };
}

function IconFile() {
  return (
    <svg viewBox="0 0 20 20" fill="none" style={{width:16,height:16,flexShrink:0,color:'var(--wood-mid)'}}>
      <path d="M5 2h7l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function IconLink() {
  return (
    <svg viewBox="0 0 16 16" fill="none" style={{width:14,height:14,flexShrink:0}}>
      <path d="M7 9a3 3 0 004.243.707l2-2a3 3 0 00-4.243-4.243l-1 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M9 7a3 3 0 00-4.243-.707l-2 2a3 3 0 004.243 4.243l1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function IconChevron({ open }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" style={{width:12,height:12,flexShrink:0,transition:'transform .3s',transform: open ? 'rotate(90deg)' : 'rotate(0deg)'}}>
      <path d="M4 2.5L8 6L4 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconFolder({ open }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" style={{width:18,height:18,flexShrink:0,color:'var(--gold-bright)'}}>
      {open
        ? <path d="M2 7h16v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm0 0V5a1 1 0 011-1h5l2 2h7a1 1 0 011 1v0" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        : <path d="M2 6h7l2 2h7v9a1 1 0 01-1 1H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      }
    </svg>
  );
}

function FileItem({ str, indent = 1 }) {
  const { title, url } = parseFile(str);
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10,
      padding:'9px 16px 9px ' + (16 + indent * 24) + 'px',
      borderBottom:'1px solid var(--line)',
      background:'var(--surface-soft)', transition:'background .2s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in srgb,var(--gold-soft) 12%,var(--surface-soft))'}
    onMouseLeave={e => e.currentTarget.style.background = 'var(--surface-soft)'}
    >
      <IconFile />
      <span style={{flex:1, fontSize:14, letterSpacing:'1px', color:'var(--ink-soft)', lineHeight:1.5}}>{title}</span>
      {url &&
        <a href={url} target="_blank" rel="noopener noreferrer" style={{
          display:'flex', alignItems:'center', gap:5, padding:'4px 12px',
          border:'1px solid var(--line)', fontSize:12, letterSpacing:'2px',
          color:'var(--wood-mid)', background:'var(--cream-soft)', whiteSpace:'nowrap',
          transition:'all .25s', textDecoration:'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.background='var(--wood-deep)'; e.currentTarget.style.color='var(--gold-soft)'; e.currentTarget.style.borderColor='var(--wood-deep)'; }}
        onMouseLeave={e => { e.currentTarget.style.background='var(--cream-soft)'; e.currentTarget.style.color='var(--wood-mid)'; e.currentTarget.style.borderColor='var(--line)'; }}
        >
          前往雲端下載
        </a>
      }
    </div>
  );
}

// ── Section (Column C) — expandable folder ─────────────────────────────────────
function SectionC({ data, gi, si, autoOpen }) {
  const empty = !data.files || data.files.length === 0;
  const lang = useContext(window.LangContext);
  const cName = (lang === 'en' && SECTION_EN[data.c]) ? SECTION_EN[data.c] : data.c;
  const [open, setOpen] = useState(autoOpen && !empty);
  const ref = useRef(null);
  useEffect(() => {
    if (autoOpen && ref.current) {
      if (!empty) setOpen(true);
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [autoOpen]);
  return (
    <div ref={ref} style={{borderBottom:'1px solid var(--line-strong)', scrollMarginTop:'88px'}}>
      <div
        onClick={() => { if (!empty) setOpen(o => !o); }}
        style={{
          display:'flex', alignItems:'center', gap:12, padding:'14px 20px',
          background: open ? 'color-mix(in srgb,var(--gold) 12%,var(--parchment))' : 'var(--parchment)',
          cursor: empty ? 'default' : 'pointer', transition:'background .25s', opacity: empty ? .72 : 1,
        }}
        onMouseEnter={e => { if(!open && !empty) e.currentTarget.style.background='color-mix(in srgb,var(--gold) 6%,var(--parchment))'; }}
        onMouseLeave={e => { if(!open && !empty) e.currentTarget.style.background='var(--parchment)'; }}
      >
        <IconFolder open={open} />
        <span style={{flex:1, fontFamily:"'Noto Serif TC',serif", fontSize:15, letterSpacing:'3px', color:'var(--wood-deep)', fontWeight:500}}>{cName}</span>
        {empty
          ? <span style={{fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:13, letterSpacing:'2px', color:'var(--wood-mid)'}}>敬請期待 · Coming soon</span>
          : <>
              <span style={{fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:13, letterSpacing:'2px', color:'var(--wood-mid)', marginRight:10}}>{data.files.length} files</span>
              <IconChevron open={open} />
            </>
        }
      </div>
      {open && !empty && data.files.map((f, i) => <FileItem key={i} str={f} indent={1} />)}
    </div>
  );
}

// ── Category Page ───────────────────────────────────────────────────────────────
window.CategoryPage = function CategoryPage({ catId }) {
  const { setPage, navTarget } = useContext(window.NavContext);
  const t = window.useT();
  const lang = useContext(window.LangContext);
  const cat = DOWNLOAD_DATA.find(c => c.id === catId);
  if (!cat) return null;
  const label = t('nav.cat.' + catId);

  return (
    <>
      <section className="page-hero archive-hero">
        <div className="container">
          <div className="crumb">
            <a onClick={() => setPage('home')} style={{cursor:'pointer'}}>{t('nav.home')}</a>
            <span className="crumb-sep">／</span>
            <span>{label}</span>
          </div>
          <div className="page-hero-grid">
            <div className="page-hero-text">
              <h1>
                {label}
                <span className="en-sub">{EN_SUB[catId]}</span>
              </h1>
              <p className="page-lead">{t('dl.lead.' + catId)}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--surface)'}}>
        <div className="container">
          {cat.groups.map((g, gi) => (
            <div className="dl-group" key={gi}>
              <div className="dl-group-head">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 7h5l3 3h10v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M3 7V5a1 1 0 011-1h5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span className="b-cn">{g.b}</span>
                <span className="b-en">{TYPE_EN[g.b] || ''}</span>
              </div>
              <div className="dl-sections">
                {g.sections.map((s, si) => (
                  <SectionC key={si} data={s} gi={gi} si={si} autoOpen={navTarget === gi + '-' + si} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
