from lib2to3.pgen2 import driver
from pydoc import describe
import unittest
from urllib import response
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

class Regist(unittest.TestCase): 

    def setUp(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())

    def test_a_failed_regist_with_no_input_data(self):
        driver = self.driver 
        driver.get('http://barru.pythonanywhere.com/daftar')
        time.sleep(3)
        driver.find_element(By.ID,'signUp').click()
        time.sleep(1)
        driver.find_element(By.ID,'name_register').send_keys('')
        time.sleep(1)
        driver.find_element(By.ID,'email_register').send_keys('')
        time.sleep(1)
        driver.find_element(By.ID,'password_register').send_keys('')
        time.sleep(1)
        driver.find_element(By.ID,'signup_register').click()
        time.sleep(1)

        response_atas = driver.find_element(By.ID,'swal2-title').text
        response_bawah = driver.find_element(By.ID,'swal2-content').text

        self.assertIn('tidak boleh kosong', response_atas)
        self.assertEqual(response_bawah, 'Gagal Register!')

    def test_b_failed_regist_with_max_character_name(self):
        driver = self.driver 
        driver.get('http://barru.pythonanywhere.com/daftar')
        time.sleep(3)
        driver.find_element(By.ID,'signUp').click()
        time.sleep(1)
        driver.find_element(By.ID,'name_register').send_keys('adinda yusia lamina shifa aiys yunia sair kemana sari dewi')
        time.sleep(1)
        driver.find_element(By.ID,'email_register').send_keys('dewi@gmail.com')
        time.sleep(1)
        driver.find_element(By.ID,'password_register').send_keys('makanan')
        time.sleep(1)
        driver.find_element(By.ID,'signup_register').click()
        time.sleep(1)

        response_atas = driver.find_element(By.ID,'swal2-title').text
        response_bawah = driver.find_element(By.ID,'swal2-content').text

        self.assertIn('melebihi maksimal karakter', response_atas)
        self.assertEqual(response_bawah, 'Gagal Register!')

    def test_c_failed_regist_with_email_registered(self):
        driver = self.driver 
        driver.get('http://barru.pythonanywhere.com/daftar')
        time.sleep(3)
        driver.find_element(By.ID,'signUp').click()
        time.sleep(1)
        driver.find_element(By.ID,'name_register').send_keys('dewi sari')
        time.sleep(1)
        driver.find_element(By.ID,'email_register').send_keys('tester@jagoqa.com')
        time.sleep(1)
        driver.find_element(By.ID,'password_register').send_keys('luarbiasa')
        time.sleep(1)
        driver.find_element(By.ID,'signup_register').click()
        time.sleep(1)

        response_atas = driver.find_element(By.ID,'swal2-title').text
        response_bawah = driver.find_element(By.ID,'swal2-content').text

        self.assertIn('Email sudah terdaftar', response_atas)
        self.assertEqual(response_bawah, 'Gagal Register!')

    def test_d_failed_regist_with_blank_email(self):
        driver = self.driver 
        driver.get('http://barru.pythonanywhere.com/daftar')
        time.sleep(3)
        driver.find_element(By.ID,'signUp').click()
        time.sleep(1)
        driver.find_element(By.ID,'name_register').send_keys('aisyah')
        time.sleep(1)
        driver.find_element(By.ID,'email_register').send_keys('')
        time.sleep(1)
        driver.find_element(By.ID,'password_register').send_keys('lalapan')
        time.sleep(1)
        driver.find_element(By.ID,'signup_register').click()
        time.sleep(1)

        response_atas = driver.find_element(By.ID,'swal2-title').text
        response_bawah = driver.find_element(By.ID,'swal2-content').text

        self.assertIn('tidak boleh kosong', response_atas)
        self.assertEqual(response_bawah, 'Gagal Register!')

    def test_e_success_regist(self):
        driver = self.driver 
        driver.get('http://barru.pythonanywhere.com/daftar')
        time.sleep(3)
        driver.find_element(By.ID,'signUp').click()
        time.sleep(1)
        driver.find_element(By.ID,'name_register').send_keys('jangwon')
        time.sleep(1)
        driver.find_element(By.ID,'email_register').send_keys('ive1jang@gmail.com')
        time.sleep(1)
        driver.find_element(By.ID,'password_register').send_keys('afterlikee')
        time.sleep(1)
        driver.find_element(By.ID,'signup_register').click()
        time.sleep(1)

        response_atas = driver.find_element(By.ID,'swal2-title').text
        response_bawah = driver.find_element(By.ID,'swal2-content').text

        self.assertIn('berhasil', response_atas)
        self.assertEqual(response_bawah, 'created user!')
        
    def tearDown(self):
        self.driver.close()

if __name__ == '__main__':
    unittest.main()
