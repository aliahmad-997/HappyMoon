from django.conf import settings
from django.db import models

# Create your models here.
from users.models import User
from django.db import models


class Category(models.Model):
    name = models.CharField(blank=False, null=False, max_length=255)
    image = models.ImageField(blank=False, null=False, max_length=1023, upload_to='categories/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Employee(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'))
    name = models.CharField(blank=False, null=False, default="", max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, default="0")
    address = models.CharField(blank=True, null=True, max_length=255)
    houseNo = models.CharField(blank=True, null=True, max_length=255)
    city = models.CharField(blank=True, null=True, max_length=255)
    state = models.CharField(blank=True, null=True, max_length=255)
    zip = models.CharField(blank=True, null=True, max_length=255)
    sub_valid = models.DateField(blank=True, null=True, default="2000-01-01")
    years_of_experience = models.IntegerField(default=0, null=False)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Employees'
        ordering = ('-created_at',)


class EmployeePhoto(models.Model):
    profile = models.ForeignKey(Employee, on_delete=models.CASCADE)
    profile_image = models.ImageField(max_length=1023, null=False, blank=False, upload_to='profile_image/')


class EmployeeCategory(models.Model):
    employee = models.ForeignKey(Employee, related_name="employee_category", on_delete=models.CASCADE)
    category = models.ForeignKey(Employee, related_name="category_employee", on_delete=models.CASCADE)
    price = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Employee Categories'


class Subscription(models.Model):
    name = models.CharField(blank=False, null=False, default="", max_length=50)
    price = models.IntegerField(default=0, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Subscriptions'


class EmployeeSubscription(models.Model):
    employee = models.ForeignKey(Employee, related_name="employee_sub", on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, related_name="employee_sub", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.employee

    class Meta:
        verbose_name_plural = 'Employee Subscriptions'


class Review(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, default=None)
    comments = models.CharField(max_length=1023, default='', null=False, blank=False)
    rating = models.IntegerField(default=0, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)


class BookingRequest(models.Model):
    CHOICES = (
        ('0', 'Created'),
        ('1', 'Accepted'),
        ('2', 'Rejected'))
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, default=None)
    date_time = models.DateTimeField(null=False, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, default=None)
    category = models.ForeignKey(Category, related_name="category_booking", on_delete=models.CASCADE)
    address = models.CharField(blank=True, null=True, max_length=255)
    houseNo = models.CharField(blank=True, null=True, max_length=255)
    city = models.CharField(blank=True, null=True, max_length=255)
    state = models.CharField(blank=True, null=True, max_length=255)
    zip = models.CharField(blank=True, null=True, max_length=255)
    comments = models.CharField(max_length=1023, default='', null=False, blank=False)
    status = models.CharField(max_length=20, choices=CHOICES, default="0")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.employee


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"
