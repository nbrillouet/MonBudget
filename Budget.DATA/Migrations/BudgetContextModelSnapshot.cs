﻿// <auto-generated />
using Budget.DATA;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Budget.DATA.Migrations
{
    [DbContext(typeof(BudgetContext))]
    partial class BudgetContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Budget.MODEL.Shortcut", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("Icon")
                        .HasColumnName("ICON");

                    b.Property<int>("IdUser")
                        .HasColumnName("ID_USER");

                    b.Property<string>("Title")
                        .HasColumnName("TITLE");

                    b.Property<string>("Type")
                        .HasColumnName("TYPE");

                    b.Property<string>("Url")
                        .HasColumnName("URL");

                    b.HasKey("Id");

                    b.HasIndex("IdUser");

                    b.ToTable("SHORTCUT");
                });

            modelBuilder.Entity("Budget.MODEL.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID");

                    b.Property<string>("AvatarUrl")
                        .HasColumnName("AVATAR_URL");

                    b.Property<string>("City")
                        .HasColumnName("CITY");

                    b.Property<string>("Country")
                        .HasColumnName("COUNTRY");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnName("CREATION_DATE");

                    b.Property<DateTime>("DateLastActive")
                        .HasColumnName("LAST_ACTIVE_DATE");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnName("BIRTH_DATE");

                    b.Property<string>("FirstName")
                        .HasColumnName("FIRST_NAME");

                    b.Property<string>("Gender")
                        .HasColumnName("GENDER");

                    b.Property<string>("IdAvatarCloud")
                        .HasColumnName("ID_AVATAR_CLOUD");

                    b.Property<string>("LastName")
                        .HasColumnName("LAST_NAME");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnName("PASSWORD_HASH");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnName("PASSWORD_SALT");

                    b.Property<int>("PostalCode")
                        .HasColumnName("POSTAL_CODE");

                    b.Property<string>("UserName")
                        .HasColumnName("USER_NAME");

                    b.HasKey("Id");

                    b.ToTable("USER");
                });

            modelBuilder.Entity("Budget.MODEL.Shortcut", b =>
                {
                    b.HasOne("Budget.MODEL.User", "User")
                        .WithMany("Shortcuts")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
